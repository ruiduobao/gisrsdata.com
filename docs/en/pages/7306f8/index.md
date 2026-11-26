---
title: "How to Download the ASTER Global DEM"
date: 2022-01-29 06:45:10
---

# ASTER Global Digital Elevation Model — Download Guide

## What this dataset is

A DEM (digital elevation model) is a map of how high the ground is: every point carries an elevation value. You need one before you can compute slopes, render terrain, or model where water flows.

This guide covers the **ASTER Global Digital Elevation Model**, which can be downloaded for free from NASA's Earthdata website. Using version V002 as the example, it walks through downloading the DEM for any area in the world and mosaicking the downloaded tiles into one complete DEM.

## Coverage and time range

- Coverage: global
- Version used in this guide: ASTER Global Digital Elevation Model V002

## Resolution and specifications

- Spatial resolution: not stated on the original page — check the product page on NASA Earthdata when downloading
- Downloads arrive as many small zipped tiles that must be extracted and mosaicked (see the steps below); use Pixel Type 16 bit signed when mosaicking (as read from the DEM properties)

## What you can use it for

- Terrain analysis: slope, aspect and hillshade
- Hydrology modelling: watersheds and stream networks
- A terrain base for maps and 3D scenes

## How to download

After trying many websites without success, the working route turned out to be NASA's Earthdata site, which hosts the ASTER Global Digital Elevation Model V002.

Download site:

```
https://search.earthdata.nasa.gov/search?q=ASTER&ok=ASTER
```

![](http://pics.landcover100.com/pics//image/202201290646446.png)

1. Register an account and log in

2. Search for ASTER and look for the DEM

3. Draw your study area to choose the download extent

4. Click the "ASTER Global Digital Elevation Model V002" result

![](http://pics.landcover100.com/pics//image/202201290648289.jpg)

5. Click "Download All" to download all DEM tiles for your study area

![](http://pics.landcover100.com/pics//image/202201290648588.png)

6. Click through the buttons shown, choose your intended use, agree, finish, and click "Download Data"

![](http://pics.landcover100.com/pics//image/202201290649661.png)

NASA then processes the order and emails the download link to your registered address.

![](http://pics.landcover100.com/pics//image/202201290649255.png)

Find the download link in that email — it points to one archive containing all the DEM tiles you need.

The downloaded archive contains many smaller archives.

![](http://pics.landcover100.com/pics//image/202201290650653.png)

Select all the small archives, extract them into the current folder, then search for "dem" and move all DEM files into a new folder for easier handling.

In ArcGIS, use ArcToolbox → Data Management Tools → Raster → Mosaic to New Raster to mosaic the tiles into one complete DEM.

![](http://pics.landcover100.com/pics//image/202201290650375.png)

Note: set Pixel Type to 16 bit signed (as read from the DEM properties); adjust the other parameters to your needs.

## License and citation

The data is provided through NASA Earthdata and requires a free Earthdata account to download. Follow Earthdata's data use policy and credit the source as the ASTER Global Digital Elevation Model.

## Author

![](http://pics.landcover100.com/pics//image/202201281759734.png)
