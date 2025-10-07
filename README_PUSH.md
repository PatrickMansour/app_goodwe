# Instruções rápidas para enviar este projeto a um novo repositório GitHub

Opções (recomendado): use a GitHub CLI (`gh`) para criar o repositório remoto automaticamente.

1) Usando o script helper (PowerShell)

- Abra PowerShell na raiz do projeto e rode:

```powershell
# Substitua Owner por seu usuário GitHub (ou deixe vazio para usuário atual do gh)
.\GIT_PUSH.ps1 -RepoName MySmartHome -Owner your-github-username -Visibility public
```

2) Manual (sem `gh`)

```powershell
# Inicialize git (se necessário)
git init
# Adicione e commite as alterações
git add -A
git commit -m "chore: remove Lovable integration and metadata"
# Crie o repositório no GitHub via UI e copie a URL (https://github.com/username/repo.git)
# Adicione o remote e envie
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main
```

3) Passos de verificação

- Abra o repo no GitHub e confira que `README.md`, `package.json` e `src/` estão presentes.
- Rode `npm install` localmente e `npm run dev` para testar.

Se preferir, posso personalizar o script com seu nome de usuário e nome do repositório — diga o `Owner` e `RepoName` que eu atualizo o script e te devolvo. 