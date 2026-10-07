# Publicar el portfolio en pablo.archonconsultancies.com

La carpeta está preparada para GitHub Pages e incluye un archivo `CNAME` con el dominio final.

## 1. Repositorio
Crea un repositorio público, por ejemplo `pablo-portfolio`, y sube **el contenido de esta carpeta** a la raíz del repositorio.

## 2. GitHub Pages
En `Settings > Pages` selecciona `Deploy from a branch`, rama `main`, carpeta `/ (root)`.

## 3. DNS del dominio
En el proveedor de `archonconsultancies.com`, crea un registro:

- Tipo: `CNAME`
- Nombre/Host: `pablo`
- Destino: `palcocerhurtado-tech.github.io`

No escribas `https://` en el destino.

## 4. Dominio personalizado
En GitHub `Settings > Pages > Custom domain`, escribe `pablo.archonconsultancies.com` y guarda. Activa `Enforce HTTPS` cuando GitHub lo permita.

El visitante verá únicamente `pablo.archonconsultancies.com`; no aparecerá GitHub, Claude ni ninguna IA en la URL pública.
