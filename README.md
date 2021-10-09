# Quiz Sliver

**NOTE:** The original author of this code harispasha. I just got the source code directly from him and got permissions to make it opensource under some conditions. for more details see the FAQs and what's new sections. Also, note that I only have access to source code till now the data is still owned by haris pasha.

COMSATS hybrid quizzes is the most fun part of whole university life. As everyone else, we also solved them in groups. We used to take screenshots of difficult MCQs and when they repeat from someone else we just check them to answer correctly. But being a clever mind I proceeded one step ahead and built a chrome extension that automatically save each MCQ you answer and when that MCQ is repeat it automatically mark the correct and submit.

For a long period of time that was kept in my PC. Recently I randomly found in my PC and now I'm sharing it publicly. I don't know but may its already popular among the students, because I remember I shared it with some close friends.

## Is it legal?
**TBD:** Most probably not.

But the point to ponder is we are not doing some illegal. I just automated the process that students even before me were doing. So this extension is as wrong as solving quizzes in groups in wrong.

## How to install??

Now how can you install it on your PC? Below are the steps you can follow:

1. Goto: https://github.com/nmanumr/quizsliver/releases/latest
2. Download "QuizSliver.zip" under Assets
2. Extract that ZIP somewhere in you PC.
3. Open `chrome://extensions/` url in you Chrome browser.
4. Turn on Developer mode on top right corner.
5. Click newly came "Load Unpacked" button and select the extracted folder.
6. Open the CUOnline and continue solving you quiz.

## How to update??

Below are the steps you can follow to update the extension:

1. Remove the extension from `chrome://extensions/` url
2. Redownload the latest version from `https://github.com/itsumarfarooq/quizsliver`
3. Install it by following the steps described above.

## How much data we have?
The main thing that matters in not code but the MCQ's data the extension had. All the MCQs data is saved in a centralized database so if anyone ever had solved any MCQ at any time, you don't have to solve that again :).

Unfortunately, I never used the final version myself but As I shared it with my friends, I'm 100% sure that this will already be use by may students. Which means there should be a lot of data.


## For which campuses it is?
It not only works for COMSATS Islamabad but also supports other campuses. Below is the list of supported URLs:

1. https://cms.comsats.edu.pk:8093/ (Islamabad)
2. https://cuonline.cuilahore.edu.pk:8091/ (Lahore)
3. https://swl-cms.comsats.edu.pk:8082/ (Sahiwal)
4. https://cuonline.ciitwah.edu.pk:8090/ (Wah)
5. https://cuonline.ciit-attock.edu.pk:8090/ (Attock)
6. https://vhr-cms.comsats.edu.pk:8089/ (Vehari)

## Supported Versions

Supported Versions of Quiz Sliver are given below recommend to use the lastest version currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.3.3 (Latest/Recommend)  | :white_check_mark: |
| v1.3.2 & v1.3.1   | :x:                |
| < v1.3.0   | :x:                |

The Version less than `v1.3.0` is under previous ownership (`Unsupported`). Avoid using `v1.2.7 - v1.2.3` builds those are Unsupported version of Quiz Sliver as the `ownership` is transferred - `Security Policy` Regarding <a href="https://github.com/nmanumr/quizsliver/blob/master/SECURITY.md" target="_blank">Releases</a>


## Disclaimer

This extension is provided as is without any warranty of any kind. Also, Author is not responsible for any kind of damage caused by this piece of software. **USE AT YOU OWN RISK**.


## FAQs

1. **Who is the original author of source code?**<br>A COMSATS student named harispasha originally wrote the source code and published the compiled version of the extension [here](https://github.com/itsumarfarooq/quizsliver). 
2. **How I got this source code?**<br>Haris Pasha was thinking to end the support for his extension and was looking for a new maintainer I contacted him, and he gave it to me.

## What's New?

Following are few changes I made to the original source code:

* Moved from webpack to rollup.
* Updated the firebase sdk version to 9.0 beta.
* Improved build pipeline.

These few changes reduced the final bundle size from previously 1.1Mb to only 129Kb now.

## Contact Me

You can contact me via github discussions. If you want to contact harispasha you can mail him at [harispasha@protonmail.com](mailto:harispasha@protonmail.com) or join his discord server (note: I'm not too much active there):

[![](https://discordapp.com/api/guilds/699000998877986896/embed.png?style=banner2)](https://discord.gg/QHNBZBD)

