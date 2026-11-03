---
title: "EO-1 Hyperion Hyperspectral Imager"
date: 2026-11-03 12:00:00
permalink: /pages/9f815cd7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "eo-1"
  - "hyperion"
  - "hyperspectral"
  - "satellite-imagery"
  - "usgs"
---

# EO-1 Hyperion Hyperspectral Imager

## 数据集简介

Hyperion is a high resolution hyperspectral imager producing 220 unique
spectral channels ranging from 0.357 to 2.576 micrometers with a 10-nm
bandwidth. The instrument operates in a pushbroom fashion, with a spatial
resolution of 30 meters for all bands and a standard scene width of 7.7
kilometers.

This dataset contains level 1A radiance images, radiometrically calibrated
and orthorectified. The SWIR bands have a scaling factor of 80 and the VNIR
bands have a scaling factor of 40 applied.

- VNIR bands (B008-B057, 426.82nm - 925.41nm): L = Digital Number / 40

- SWIR bands (B077-B224, 912.45nm - 2395.50nm): L = Digital Number / 80

Note that bands B001-B007, B058-B076, and B225-242 are not calibrated,
have no valid values and are not included into EE assets. See the
[detailed spectral coverage information](https://doi.org/10.5066/P9JXHMO2).

This is a preview dataset; only a portion of the data from the
original source have been downloaded.

## 基本信息

- 数据集编号（Earth Engine ID）：`EO1/HYPERION`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：2001-05-01 至 2017-03-13
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：eo-1, hyperion, hyperspectral, satellite-imagery, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B008 | VNIR band B8 | 30 | 426.8200nm, FWHM: 11.3871nm |
| B009 | VNIR band B9 | 30 | 436.9900nm, FWHM: 11.3871nm |
| B010 | VNIR band B10 | 30 | 447.1700nm, FWHM: 11.3871nm |
| B011 | VNIR band B11 | 30 | 457.3400nm, FWHM: 11.3871nm |
| B012 | VNIR band B12 | 30 | 467.5200nm, FWHM: 11.3871nm |
| B013 | VNIR band B13 | 30 | 477.6900nm, FWHM: 11.3871nm |
| B014 | VNIR band B14 | 30 | 487.8700nm, FWHM: 11.3784nm |
| B015 | VNIR band B15 | 30 | 498.0400nm, FWHM: 11.3538nm |
| B016 | VNIR band B16 | 30 | 508.2200nm, FWHM: 11.3133nm |
| B017 | VNIR band B17 | 30 | 518.3900nm, FWHM: 11.2580nm |
| B018 | VNIR band B18 | 30 | 528.5700nm, FWHM: 11.1907nm |
| B019 | VNIR band B19 | 30 | 538.7400nm, FWHM: 11.1119nm |
| B020 | VNIR band B20 | 30 | 548.9200nm, FWHM: 11.0245nm |
| B021 | VNIR band B21 | 30 | 559.0900nm, FWHM: 10.9321nm |
| B022 | VNIR band B22 | 30 | 569.2700nm, FWHM: 10.8368nm |
| B023 | VNIR band B23 | 30 | 579.4500nm, FWHM: 10.7407nm |
| B024 | VNIR band B24 | 30 | 589.6200nm, FWHM: 10.6482nm |
| B025 | VNIR band B25 | 30 | 599.8000nm, FWHM: 10.5607nm |
| B026 | VNIR band B26 | 30 | 609.9700nm, FWHM: 10.4823nm |
| B027 | VNIR band B27 | 30 | 620.1500nm, FWHM: 10.4147nm |
| B028 | VNIR band B28 | 30 | 630.3200nm, FWHM: 10.3595nm |
| B029 | VNIR band B29 | 30 | 640.5000nm, FWHM: 10.3188nm |
| B030 | VNIR band B30 | 30 | 650.6700nm, FWHM: 10.2942nm |
| B031 | VNIR band B31 | 30 | 660.8500nm, FWHM: 10.2856nm |
| B032 | VNIR band B32 | 30 | 671.0200nm, FWHM: 10.2980nm |
| B033 | VNIR band B33 | 30 | 681.2000nm, FWHM: 10.3349nm |
| B034 | VNIR band B34 | 30 | 691.3700nm, FWHM: 10.3909nm |
| B035 | VNIR band B35 | 30 | 701.5500nm, FWHM: 10.4592nm |
| B036 | VNIR band B36 | 30 | 711.7200nm, FWHM: 10.5322nm |
| B037 | VNIR band B37 | 30 | 721.9000nm, FWHM: 10.6004nm |
| B038 | VNIR band B38 | 30 | 732.0700nm, FWHM: 10.6562nm |
| B039 | VNIR band B39 | 30 | 742.2500nm, FWHM: 10.6933nm |
| B040 | VNIR band B40 | 30 | 752.4300nm, FWHM: 10.7058nm |
| B041 | VNIR band B41 | 30 | 762.6000nm, FWHM: 10.7276nm |
| B042 | VNIR band B42 | 30 | 772.7800nm, FWHM: 10.7907nm |
| B043 | VNIR band B43 | 30 | 782.9500nm, FWHM: 10.8833nm |
| B044 | VNIR band B44 | 30 | 793.1300nm, FWHM: 10.9938nm |
| B045 | VNIR band B45 | 30 | 803.3000nm, FWHM: 11.1044nm |
| B046 | VNIR band B46 | 30 | 813.4800nm, FWHM: 11.1980nm |
| B047 | VNIR band B47 | 30 | 823.6500nm, FWHM: 11.2600nm |
| B048 | VNIR band B48 | 30 | 833.8300nm, FWHM: 11.2824nm |
| B049 | VNIR band B49 | 30 | 844.0000nm, FWHM: 11.2822nm |
| B050 | VNIR band B50 | 30 | 854.1800nm, FWHM: 11.2816nm |
| B051 | VNIR band B51 | 30 | 864.3500nm, FWHM: 11.2809nm |
| B052 | VNIR band B52 | 30 | 874.5300nm, FWHM: 11.2797nm |
| B053 | VNIR band B53 | 30 | 884.7000nm, FWHM: 11.2782nm |
| B054 | VNIR band B54 | 30 | 894.8800nm, FWHM: 11.2771nm |
| B055 | VNIR band B55 | 30 | 905.0500nm, FWHM: 11.2765nm |
| B056 | VNIR band B56 | 30 | 915.2300nm, FWHM: 11.2756nm |
| B057 | VNIR band B57 | 30 | 925.4100nm, FWHM: 11.2754nm |
| B077 | SWIR band B77 | 30 | 912.4500nm, FWHM: 11.0457nm |
| B078 | SWIR band B78 | 30 | 922.5400nm, FWHM: 11.0457nm |
| B079 | SWIR band B79 | 30 | 932.6400nm, FWHM: 11.0457nm |
| B080 | SWIR band B80 | 30 | 942.7300nm, FWHM: 11.0457nm |
| B081 | SWIR band B81 | 30 | 952.8200nm, FWHM: 11.0457nm |
| B082 | SWIR band B82 | 30 | 962.9100nm, FWHM: 11.0457nm |
| B083 | SWIR band B83 | 30 | 972.9900nm, FWHM: 11.0457nm |
| B084 | SWIR band B84 | 30 | 983.0800nm, FWHM: 11.0457nm |
| B085 | SWIR band B85 | 30 | 993.1700nm, FWHM: 11.0457nm |
| B086 | SWIR band B86 | 30 | 1003.3000nm, FWHM: 11.0457nm |
| B087 | SWIR band B87 | 30 | 1013.3000nm, FWHM: 11.0457nm |
| B088 | SWIR band B88 | 30 | 1023.4000nm, FWHM: 11.0451nm |
| B089 | SWIR band B89 | 30 | 1033.4900nm, FWHM: 11.0423nm |
| B090 | SWIR band B90 | 30 | 1043.5900nm, FWHM: 11.0372nm |
| B091 | SWIR band B91 | 30 | 1053.6900nm, FWHM: 11.0302nm |
| B092 | SWIR band B92 | 30 | 1063.7900nm, FWHM: 11.0218nm |
| B093 | SWIR band B93 | 30 | 1073.8900nm, FWHM: 11.0122nm |
| B094 | SWIR band B94 | 30 | 1083.9900nm, FWHM: 11.0013nm |
| B095 | SWIR band B95 | 30 | 1094.0900nm, FWHM: 10.9871nm |
| B096 | SWIR band B96 | 30 | 1104.1900nm, FWHM: 10.9732nm |
| B097 | SWIR band B97 | 30 | 1114.1900nm, FWHM: 10.9572nm |
| B098 | SWIR band B98 | 30 | 1124.2800nm, FWHM: 10.9418nm |
| B099 | SWIR band B99 | 30 | 1134.3800nm, FWHM: 10.9248nm |
| B100 | SWIR band B100 | 30 | 1144.4800nm, FWHM: 10.9065nm |
| B101 | SWIR band B101 | 30 | 1154.5800nm, FWHM: 10.8884nm |
| B102 | SWIR band B102 | 30 | 1164.6800nm, FWHM: 10.8696nm |
| B103 | SWIR band B103 | 30 | 1174.7700nm, FWHM: 10.8513nm |
| B104 | SWIR band B104 | 30 | 1184.8700nm, FWHM: 10.8335nm |
| B105 | SWIR band B105 | 30 | 1194.9700nm, FWHM: 10.8154nm |
| B106 | SWIR band B106 | 30 | 1205.0700nm, FWHM: 10.7979nm |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('EO1/HYPERION');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EO1_HYPERION
- 数据引用：Data available from the U.S. Geological Survey.

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
