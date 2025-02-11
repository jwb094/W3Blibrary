#### GIT


### GitKraken - YT Channel
[Intro To Git - YT Playlist](https://www.youtube.com/playlist?list=PLe6EXFvnTV7-_41SpakZoTIYCgX4aMTdU)


[conventionalcommits - Git commit msg standards](https://www.conventionalcommits.org/en/v1.0.0/)


[Git Config Global / Repo Config setup/alteration](https://support.atlassian.com/bitbucket-cloud/docs/configure-your-dvcs-username-for-commits/)



### List all changed files in a commit
solution 1

```
git diff-tree --no-commit-id --name-only {commit id} -r
```

The --no-commit-id suppresses the commit ID output.

The --name-only argument shows only the file names that were affected (Thanks Hank). Use --name-status instead, if you want to see what happened to each file (Deleted, Modified, Added)
The -r argument is to recurse into sub-trees

```
git show --pretty="" --name-only 8bcf3960af37d22d30db95f30ef7a9f7ecc30899
```

The --pretty argument specifies an empty format string to avoid the cruft at the beginning.
The --name-only argument shows only the file names that were affected (Thanks Hank)\


[]()

For full path names of changed files:
```
git log --name-only
```
For full path names and status of changed files:

```
git log --name-status
```

For abbreviated pathnames and a diffstat of changed files:
```
git log --stat
```


f you want to get the file names only without the rest of the commit message you can use:

git log --name-only --pretty=format: <branch name>
This can then be extended to use the various options that contain the file name:

git log --name-status --pretty=format: <branch name>

git log --stat --pretty=format: <branch name>


show history with files that changed:

git log --stat --pretty=short --graph