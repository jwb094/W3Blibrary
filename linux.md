Linux

[Linuxjourney.com/ ](https://linuxjourney.com/l)

[title](link)



### basic command helpful links for examples of using command

* [find - 10 ways to use the Linux find command](https://www.redhat.com/sysadmin/linux-find-command)
* [find - 35 Practical Examples of Linux Find Command :: TecMint ](https://www.tecmint.com/35-practical-examples-of-linux-find-command/)
* [grep - freecodecamp](https://www.freecodecamp.org/news/grep-command-in-linux-usage-options-and-syntax-examples/#:~:text=Grep%20is%20a%20useful%20command,a%20powerful%20command%20to%20use.)
* [man - manual command manual pages](https://dashdash.io/)

## VIM

[ohmyz](https://ohmyz.sh/)
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
some helpful commands
```
zsh --version

vi ~/.zshrc

source ~/.zshrc

softwareupdate --list
```
* [travis.media - Top 12 Oh My Zsh Themes For Productive Developers](https://travis.media/top-12-oh-my-zsh-themes-for-productive-developers/)
* [github - example of .zshrc configuration file](https://gist.github.com/zanshin/1142739)

#### helpful links

* [Linux Journey - Advanced Text Fu](https://linuxjourney.com/lesson/regular-expressions-regex)
* [vim.rtorr - Vim Cheat sheet](https://vim.rtorr.com/)
* [LearnLinuxTv - vim for begineers](https://www.youtube.com/watch?v=wACD8WEnImo&list=PLT98CRl2KxKHy4A5N70jMRYAROzzC2a6x)
* [devhints - vim cheat sheet](https://devhints.io/vim)
* [openvim - vim online playground](https://www.openvim.com/)
[learn vim fast - vim online playground with tutorials](https://vim.is/)

## dSTDIN / STDOUT / STDERR

* [GNU/Linux 101: What's stdin, stdout and stderr?](https://imreyesjorge.hashnode.dev/g101-whats-stdin-stdout-and-stderr)


## FIND
[Medium - find](https://hopeness.medium.com/master-the-find-command-a-comprehensive-guide-6604d0abc535)
[freecodecamp - How to Search for Files from the Linux Command Line](https://www.freecodecamp.org/news/how-to-search-for-files-from-the-linux-command-line/)

```
 find ~/Web_Dev/Projects -type f -name "*.sh"
find . -type f -name "*.txt" -exec cat {} \; > practiceMakePerfect_findcmdtest.txt
```