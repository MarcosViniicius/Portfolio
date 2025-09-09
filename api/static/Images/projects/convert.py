import os
from PIL import Image

# Caminho da pasta com as imagens
pasta_origem = "/media/marcos/HD/$dev-files/projetos/Portfolio/api/static/Images/projects"

# Loop por todos os arquivos da pasta
for arquivo in os.listdir(pasta_origem):
    if arquivo.lower().endswith(".png"):
        caminho_png = os.path.join(pasta_origem, arquivo)
        nome_sem_extensao = os.path.splitext(arquivo)[0]
        caminho_webp = os.path.join(pasta_origem, f"{nome_sem_extensao}.webp")

        # Abrir imagem e salvar como WebP
        with Image.open(caminho_png) as img:
            img.save(caminho_webp, "WEBP")

        print(f"{arquivo} convertido para {nome_sem_extensao}.webp")
