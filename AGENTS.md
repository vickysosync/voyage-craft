<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep public and admin demo content in a shared client-side React store with browser persistence, because this project must remain backend-free.
- Keep page routes as TanStack file routes while using React, Vite, and Tailwind, because the project runtime owns navigation and rendering.
