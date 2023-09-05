[Let's start with an ad](https://www.youtube.com/watch?v=Y2cas2I-5bk)


1. Core components read only. 
2. Some dirs are still writeable like `/home`, `/etc`.
3. There are different levels of immutability / strictness. 
4. All software is in container, do not affect OS. 
5. You can change them by rebuilding the image. 

### [ examples](https://itsfoss.com/immutable-linux-distros/)

Nix OS [(strictiest, every change should be on one conf file)](https://christitus.com/nixos-explained/)
Fedora SIlverBlue
openSUSE MicroOS
Vanilla OS
Amazon: BottleRocket

@deprecated
Windows CE (embedded Compact)



### Pros
1. Preconfigued! Can release/manage image to others.
2. Applications can be installed on containers, outside of root. 
3. Atomic updates - easy to rollback when broken.
4. More secure - just rollback the image. 

### Cons
- Ownership: Not as configurable as regular distro. 
- [not HFS compliant](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard), so some software won't work / available. 
- requires a lot of storage


## How Updates work:
1. Two partitions: one for running and one for update, and then the partition is swapped. 
2. Like git.

## Big Corpos

MacOS ([very interesting](https://eclecticlight.co/2021/10/29/how-macos-is-more-reliable-and-doesnt-need-reinstalling/))
IOS,
Android,
	
Windows Core OS.


![[Pasted image 20230905230529.png]]


Misconceptions:
https://blog.verbum.org/2020/08/22/immutable-%E2%86%92-reprovisionable-anti-hysteresis/

Recap:
https://www.youtube.com/watch?v=uWxnqxDetVY

