# Deploy en VPS Hostinger (Ubuntu + Nginx)

## Requisitos previos
- VPS Ubuntu 22.04+ en Hostinger
- Acceso SSH como root
- Dominio apuntando a la IP del VPS (A record)
- Cuenta en MongoDB Atlas con cluster creado

---

## 1. Configurar el servidor

```bash
# Conectar por SSH
ssh root@TU_IP_VPS

# Actualizar el sistema
apt update && apt upgrade -y

# Instalar Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs

# Verificar
node -v  # v20.x.x
npm -v   # 10.x.x

# Instalar Nginx
apt install -y nginx

# Instalar PM2 globalmente
npm install -g pm2

# Instalar Git
apt install -y git

# Crear directorio de logs para PM2
mkdir -p /var/log/pm2
```

## 2. Clonar el proyecto

```bash
# Crear directorio
mkdir -p /var/www
cd /var/www

# Clonar (reemplaza con tu repo)
git clone https://github.com/TU_USUARIO/monica-grizales-web.git monica-grizales
cd monica-grizales
```

## 3. Configurar variables de entorno

```bash
# Crear .env
nano /var/www/monica-grizales/.env
```

Contenido del `.env`:
```
MONGODB_URI=mongodb+srv://usuario:password@cluster.xxxxx.mongodb.net/monica-grizales?retryWrites=true&w=majority
NEXT_PUBLIC_SITE_URL=https://monicagrizales.com
NODE_ENV=production
```

## 4. Instalar dependencias y construir

```bash
cd /var/www/monica-grizales

# Instalar dependencias
npm ci

# Construir para producción
npm run build
```

## 5. Configurar PM2

```bash
# Iniciar la aplicación
pm2 start ecosystem.config.js

# Verificar que está corriendo
pm2 status

# Configurar inicio automático
pm2 startup systemd
pm2 save
```

## 6. Configurar Nginx

```bash
# Copiar configuración
cp /var/www/monica-grizales/nginx.conf /etc/nginx/sites-available/monicagrizales.com

# Habilitar el sitio
ln -s /etc/nginx/sites-available/monicagrizales.com /etc/nginx/sites-enabled/

# Eliminar default si existe
rm -f /etc/nginx/sites-enabled/default

# Verificar configuración
nginx -t

# Recargar Nginx
systemctl reload nginx
```

## 7. Configurar SSL con Let's Encrypt

```bash
# Instalar Certbot
apt install -y certbot python3-certbot-nginx

# Obtener certificado (temporal: comentar las líneas ssl en nginx.conf primero)
# Primero, editar nginx.conf temporalmente para solo tener el bloque HTTP:
nano /etc/nginx/sites-available/monicagrizales.com
```

Dejar temporalmente solo esto:
```nginx
server {
    listen 80;
    server_name monicagrizales.com www.monicagrizales.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
nginx -t && systemctl reload nginx

# Obtener certificado SSL
certbot --nginx -d monicagrizales.com -d www.monicagrizales.com

# Ahora reemplazar con la configuración completa
cp /var/www/monica-grizales/nginx.conf /etc/nginx/sites-available/monicagrizales.com
nginx -t && systemctl reload nginx

# Verificar renovación automática
certbot renew --dry-run
```

## 8. Configurar Firewall

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
ufw status
```

## 9. Configurar MongoDB Atlas

1. Ir a [MongoDB Atlas](https://cloud.mongodb.com)
2. Crear cluster (Free Tier M0)
3. Crear usuario de base de datos
4. En Network Access: agregar la IP del VPS (o 0.0.0.0/0 para desarrollo)
5. Copiar el connection string y ponerlo en `.env`

## 10. Crear directorio de imágenes

```bash
mkdir -p /var/www/monica-grizales/public/images
```

Subir las imágenes de Mónica:
```bash
# Desde tu máquina local
scp monica.jpg root@TU_IP_VPS:/var/www/monica-grizales/public/images/
scp grupo.jpg root@TU_IP_VPS:/var/www/monica-grizales/public/images/
```

---

## Comandos útiles

```bash
# Ver logs de la app
pm2 logs monica-grizales

# Reiniciar app
pm2 restart monica-grizales

# Ver estado
pm2 status

# Re-deploy (después de cambios)
cd /var/www/monica-grizales && bash scripts/deploy.sh

# Ver logs de Nginx
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

## Estructura de DNS (en Hostinger)

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | @ | TU_IP_VPS |
| A | www | TU_IP_VPS |
