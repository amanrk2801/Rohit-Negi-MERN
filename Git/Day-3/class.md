<!-- Step to Learn Git and GitHub -->


1: Git: Git is a version control system (VCS) that helps developers keep track of changes to their code over time. It allows multiple people to collaborate on the same project, track the history of changes, and manage different versions of a project efficiently.




Install Git


<!-- 1: On Mac: -->




Install Homebrew(if not already installed)
Command:
First step: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


Second Step: eval "$(/opt/homebrew/bin/brew shellenv)"


Third Step: brew install git
Fourth step: git --version


<!-- On Windows -->


Download from website: https://git-scm.com/downloads






<!-- ****************************************** -->






<!-- Configure git -->


git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"




You can verify the configuration:
git config --list




<!-- How to see hidden folder -->
In Mac: CMD + SHIFT + .
In Windows:
In Windows 10: Click on the View tab at the top, then check the box for Hidden items in the "Show/Hide" section.
In Windows 11: Click the View dropdown (three dots) in the toolbar, then select Show > Hidden items.


<!-- **************************** -->


git status
<!-- What changes are staged , not staged, untracked-->


<!-- git diff -->
q for exit
<!-- What has been changed line by line in your report. -->
<!-- it will show which parts of the report have been edited but are not yet staged for commit. -->






<!--Add file to staging area  -->
git add .


<!--Commit file -->
git commit -m "message"


<!-- Remove file from staging area -->
git reset <file>
git restore --staged <file>


<!-- Get logs of commit -->
git log
got log --oneline
git show <hash>




<!-- Revert the changes -->
git reset --hard <hashCode>
git revert <hashcode>
<!-- git add . -->
<!-- git commit -m "next" -->

<!-- How to create a branch -->
git checkout -b <branch-name>


<!-- Delete a branch -->
git branch -d branch-name
git branch -D branch-name (unmerged also)

<!-- ESC :wq --> helpful(Escape the writing mode, save and quit)
<!-- i: insert mode -->


<!-- How to change the name of branch -->
git branch -m <branch_name>

<!-- Git stash -->
allows you to temporarily save your uncommitted changes (both staged and unstaged) in a "stash" and revert your working directory back to the last commit.

<!-- git stash -->
<!-- git stash list -->
<!-- git stash apply -->
<!-- git stash apply stash@{1} -->
<!-- git stash pop -->
<!-- git stash clear -->


<!-- Working with Github -->
<!-- git remote add origin https://github.com/mohitji-dons/Helloji.git
git branch -M main
git push -u origin main -->

<!-- git pull origin main -->
<!-- git pull --rebase origin main-->

<!-- git branch -r -->

<!-- git push origin --delete feature -->





