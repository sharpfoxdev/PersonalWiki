---
tags:
  - 
share: "true"
---

# 06 Správa Verzí

## Nástroje pro Správu Kódu a Jejich Verzí (version Control Tools, Např. Git)

Version control tools are indispensable in modern software development, providing a systematic way to track, share, and manage changes to codebases. Git, created by Linus Torvalds, is the most prominent example, but there are other tools as well, such as Subversion (SVN) and Mercurial.

### Git

Git is a distributed version control system, meaning every developer's working copy of the code is also a repository that can contain the full history of all changes.

- **Key Features:**
	- **Branching and Merging**: Allows developers to work in isolated environments (branches) and later merge changes back to the main branch.
	- **Distributed Development**: Every clone is a full-fledged repository with complete history and full version-tracking capabilities.
	- **Data Integrity**: Ensures the integrity of code history with cryptographic hashes.

- **Common Git Commands:**
	- `git clone <repository>`: Clones a repository into a new directory.
	- `git status`: Displays the state of the working directory and staging area.
	- `git add <files>`: Adds files to the staging area.
	- `git commit -m "<message>"`: Commits the staged snapshot to the project history.
	- `git push`: Updates the remote repository with any commits made locally to a branch.
	- `git pull`: Fetches and merges changes on the remote server to your working directory.
- **Branch Management:**
	- `git branch`: Lists all local branches in the repository. With `-r`, it shows remote branches.
	- `git branch <branch-name>`: Creates a new branch.
	- `git checkout <branch-name>`: Switches to the specified branch.
	- `git checkout -b <branch-name>`: Creates a new branch and switches to it.
	- `git merge <branch-name>`: Merges the specified branch into the current branch.
	- `git branch -d <branch-name>`: Deletes the specified branch.

- **Stashing:**
	- `git stash`: Temporarily shelves (or stashes) changes so you can work on a different branch.
	- `git stash list`: Lists all stashed changesets.
	- `git stash pop`: Restores the most recently stashed files.

- **Tagging:**
	- `git tag`: Lists all tags.
	- `git tag <tag-name>`: Creates a tag pointing to the current commit.
	- `git tag -a <tag-name> -m "<message>"`: Creates an annotated tag.

- **Rebasing:**
	- `git rebase <branch-name>`: Reapply commits on top of another base tip. This is used to integrate changes from one branch into another.

- **Reverting Changes:**
	- `git reset --hard`: Resets the index and working directory to the last git commit's state.
	- `git revert <commit>`: Creates a new commit that undoes all of the changes made in the specified commit, then applies it to the current branch.

- **Inspecting Changes:**
	- `git log`: Shows the commit logs.
	- `git log --oneline`: Shows the commit logs in a single line per commit for simplicity.
	- `git diff`: Compares what is in your working directory with what is in your staging area.
	- `git diff --staged`: Shows any changes to tracked files in the staging area that are not yet committed.

- **Working with Remotes:**
	- `git remote add <remote-name> <remote-url>`: Adds a new remote Git repository.
	- `git fetch <remote-name>`: Fetches new branches and data from the remote repository.
	- `git pull <remote-name> <branch-name>`: Fetches changes from the remote repository and merges them into the current branch.
	- `git push <remote-name> <branch-name>`: Pushes your changes to the remote repository.

- **Cleaning:**
	- `git clean -n`: Shows which files would be removed from working directory.
	- `git clean -f`: Removes untracked files from the working directory.

### Other Version Control Tools

- **Subversion (SVN)**: A centralized version control system that keeps a single copy of the repository on a server.
- **Mercurial**: Similar to Git, Mercurial is a distributed version control system, focusing on simplicity and efficiency in its operations.

### Best Practices for Using Version Control

- **Commit Often**: Frequent commits provide a detailed history of changes and make it easier to isolate and fix issues.
- **Write Meaningful Commit Messages**: Clearly describe the changes and intentions behind each commit for future reference.
- **Use Branches**: Leverage branching to experiment with new features or isolate work on different tasks.
- **Merge Changes Regularly**: Regularly merging changes helps avoid the complexity of dealing with long-lived branches and merge conflicts.
- **Review Code Before Merging**: Code reviews help ensure quality and consistency in the codebase.

