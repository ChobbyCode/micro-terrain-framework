# Micro Terrain Version 0.2.0

## About

Micro Terrain Is A Free Extension For MicroBit Makecode. It is currently version 0.2.0
Micro Terrain Is A Simple Tool You Can Use To Help Make Games On The Microbit. This tool is aimed at 8-14 year olds but you can still use it if you are out of these ages

### It Allows You To
- Create Sidescrollers
- Basic Multiplayer Using Radio

## How To Setup

### Import As Extension

First You Need To Go To https://makecode.microbit.org/ and select new project. On sellect a block click Extensions;
click search and put in the following link https://github.com/ChobbyCode/micro-terrain-framework. Click the one title Micro Terrain Framework.

### Edit Source Code 

First You Need To Go To https://makecode.microbit.org/ and select import. When you have clicked import; click from URL. 
In the URL space put the following link https://github.com/ChobbyCode/micro-terrain-framework and the project will be imported.

### Download To Your PC

Run the following command in the Terminal to download to your pc using BASH

```
git clone https://github.com/ChobbyCode/micro-terrain-framework.git
```
Use the following to copy to an existing folder on Linux Machines

```
$ cd '[put file location here]'
$ git clone https://github.com/ChobbyCode/micro-terrain-framework.git
```


## Help

Unable To Import Extension Using link

- Import As Source Code And  In Explorer Click Add And Create File Named Main.ts 

```
MicroTerrain.Source()
```


 




## Usage Of Program

The following code will be in JavaScript but will also work with TypeScript.

We can use the following code to setup a basic scene at the start of the game when the MicroBit Starts. 
In  the first slot we put the X Positions and in the one after Y.
```
MicroTerrain.Scene([Put X Positions Here], [Put Y Positions Here])
```

We can also add a object at any time using the following ChobbyCode. The X is the X Position
and Y is the Y Position
```
MicroTerrain.Push(X, Y)
```

The program also allows to be used a blocks in the Block Editor.

You can test you have installed it correctly with the following code:
```
MicroTerrain.Scene([1, 4], [2, 3])
```
You use A To either move left or up, you use B to either move down or right. Use A+B to change the rotation of these.

## Installing A Beta

You can install a beta by copying the one of the following links and using the default installation guides.

There are currently no Betas Available

BSD 2-Clause License

Copyright (c) 2022, Jacob Hadfield All rights reserved.
