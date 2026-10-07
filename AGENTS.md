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

## Project architecture

- Keep each major portfolio destination as a dedicated TanStack route and source reusable library entries from typed content modules, so the site remains SEO-friendly and content-ready.
- Store supplied prompt bodies verbatim in the typed library content and render them through a shared detail dialog, so reading and copying use the same source without executing AI calls.
