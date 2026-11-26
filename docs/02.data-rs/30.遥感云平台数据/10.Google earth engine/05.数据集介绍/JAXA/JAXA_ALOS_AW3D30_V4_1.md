---
title: "ALOS 全球 30 米 DSM v4.1"
date: 2026-11-03 12:00:00
permalink: /pages/774620fb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "jaxa"
  - "topography"
---

# ALOS 全球 30 米 DSM v4.1

英文原名：ALOS DSM: Global 30m  v4.1

## 这是什么数据

ALOS World 3D - 30m（AW3D30）是全球数字地表模型（DSM）数据集，水平分辨率约 30 米（1 弧秒格网）。该数据集基于 [World 3D Topographic Data](https://www.aw3d.jp/en/) 的 DSM 数据集（5 米格网版本）。更多细节见数据集[文档](https://www.eorc.jaxa.jp/ALOS/en/dataset/aw3d30/data/aw3d30v4.1_product_e_1.0.pdf)。

本摄入数据集合并了 3.1、4.0 与 4.1 三个版本的数据。

4.1 版（2024 年 4 月）：本次重大更新发布了覆盖全球区域（南极洲与日本除外）的 19,051 个瓦片。它引入了新的补充数据用于空值填补，修正了 3.1 与 3.2 版中发现的部分异常，并重新填补了空值。v4.1 的具体瓦片更新，请使用地图瓦片上的 v4.1 筛选器或查阅最新格式说明。

4.0 版（2023 年 4 月）：本次更新发布了 1,886 个瓦片，改进了低、中纬度区域以及南纬 60 度以南区域。主要变化包括：1. 新的空值填补补充数据。2. 修正部分异常并重新填补空值（2 个瓦片）。3. 更新南纬 60 度以南区域的海岸线（44 个瓦片）。4. 停用里海水体掩膜并补充高程数据（54 个瓦片）。5. 提取并修正南美洲新的部分异常区域（1,786 个瓦片）。6. v4.0 的详细瓦片信息，请使用地图瓦片上的 v4.0 筛选器或查阅格式说明。

3.2 版于 2021 年 1 月发布，是通过重新审视高纬度区域的格式、辅助数据与处理方法而制作的改进版本。高纬度区域采用了随纬度带而异的像元间距。海岸线数据（辅助数据集之一）已更换，并使用了新的补充数据。此外，日本的源数据还使用了 AW3D 第 3 版。处理过程中的异常值检测方法也得到了改进。

注：计算坡度的推荐方法见代码示例。与 Earth Engine 中的大多数 DEM 不同，本数据集是影像集合（ImageCollection），因为源文件有多种分辨率、无法镶嵌为单一资产，因此坡度计算需要做重投影。

AW3D DSM 高程由使用光学影像立体像对的影像匹配过程计算得到。处理过程中云、雪与冰被自动识别并应用掩膜信息。但尤其在云、雪、冰区域周围（或边缘），有时会残留未匹配点，从而在最终 DSM 中造成一些高程误差。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2006 年 1 月 24 日至 2011 年 5 月 12 日（源数据期）；分辨率：30 米。
- 时间范围：2006-01-24 至 2011-05-12

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DSM | 海拔高：16 位有符号数据；高程（米）由基于 ITRF97 与 GRS80 的椭球高使用 EGM96 大地水准面模型换算得到。 | 30 |  |
| STK | 用于生成 DSM 的景单元 DSM 叠加数；该波段由 5 米分辨率 DSM 的叠加数重采样至 30 米分辨率得到。 | 30 |  |
| MSK | 该波段的 8 位掩膜。 | 30 |  |

## 能拿来做什么

- 地形分析与地貌研究
- 水文模拟与流域划分
- 正射校正与三维可视化

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JAXA/ALOS/AW3D30/V4_1');
```

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/AW3D30/V4_1`
- 提供方：JAXA Earth Observation Research Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AW3D30_V4_1

## 许可与引用

- 许可：proprietary
- 关键词：alos, dem, elevation, elevation-topography, geophysical, jaxa, topography
- 数据引用：T. Tadono, H. Ishida, F. Oda, S. Naito, K. Minakawa, H. Iwamoto
: Precise Global DEM Generation By ALOS PRISM, ISPRS Annals of
the Photogrammetry, Remote Sensing and Spatial Information Sciences,
Vol.II-4, pp.71-76, 2014. [PDF file](https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/II-4/71/2014/isprsannals-II-4-71-2014.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS DSM: Global 30m  v3.2 [deprecated]](/pages/6610d57d/)
- [ALOS DSM: Global 30m v1.1 [deprecated]](/pages/8561707f/)
- [ALOS DSM: Global 30m v2.1 [deprecated]](/pages/4e1fdf4b/)
- [ALOS DSM: Global 30m v2.2 [deprecated]](/pages/f8b280da/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
