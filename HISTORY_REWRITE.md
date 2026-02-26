History rewrite: image purge and collaborator instructions
===============================================

What I did
----------
- Permanently removed `assets/profileimg-DJcMelc5.png` from the repository and its history.
- Rewrote local history and force-pushed the cleaned history to `origin/main` so the image no longer appears in any commit.

Why this matters
-----------------
Rewriting history removes the file from all commits, which is useful for removing sensitive or unwanted files from the repository. However, rewriting history is destructive from a collaboration standpoint: it replaces the remote refs and requires everyone who cloned/fetched the repo to re-align their local clones.

What you (and collaborators) must do
----------------------------------
If you (or any collaborator) have a local clone of this repo, they must either:

Option A — Re-clone (recommended):

1. Delete or move the existing local clone.
2. Clone the repository again: `git clone https://github.com/Shubh1hulk/personal-landing.git`

Option B — Force-reset an existing clone (advanced):

1. Ensure you have no uncommitted local changes (stash or commit them elsewhere).
2. Fetch the updated refs: `git fetch --all`
3. Reset your local branch to remote: `git checkout main; git reset --hard origin/main`
4. If you have other local branches based on old history, you will likely need to rebase or recreate them.

Notes
-----
- I used `git filter-branch` as a fallback and then also ran `git-filter-repo` to ensure the file was purged. `git-filter-repo` is the recommended tool for rewriting history; it can be installed via `python -m pip install --user git-filter-repo`.
- If you want me to reverse the history rewrite (restore old history) or provide a backup branch with the original history, I can create one before any further changes. Ask and I will create a branch named `backup/original-history` containing the pre-rewrite state.

Questions or help
-----------------
If you want help re-aligning a local clone or preparing instructions for your team, tell me which option you prefer and I will produce ready-to-run commands for them.

