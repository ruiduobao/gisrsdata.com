---
title: "RGE ALTI：IGN 法国数字高程 1 米"
date: 2026-11-03 12:00:00
permalink: /pages/36cc0dac/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
---

# RGE ALTI：IGN 法国数字高程 1 米

英文原名：RGE ALTI: IGN RGE ALTI Digital Elevation 1m

## 这是什么数据

RGE ALTI 数据集描述法国的数字高程模型（DEM），像元大小为 1 米。它由机载激光雷达测量或航空影像相关（correlation）创建。

激光雷达被部署于易洪地区、沿海地区和大型森林地区。DEM 在这些地区的垂直精度在 0.2 米到 0.5 米之间。雷达被用于山区（阿尔卑斯山、比利牛斯山、塞文山、科西嘉）。注意：在陡坡地区，平均垂直精度约为 7 米。

这些场的精度已对照各种来源进行了检查：[BD TOPO](https://geoservices.ign.fr/bdtopo) 的道路和水文网络、大地测量终端和地面计算点。

领土的其余部分使用航空照片相关技术。在通过相关处理的某些区域，由于植被的存在（例如林区），大面积范围内没有地面测量。1987–2001 年的高程数据（BD Alti）被用于填补这些空缺。DEM 在这些区域的垂直精度在 0.5 米到 0.7 米之间。

目前该集合包括一景影像 IGN/RGE_ALTI/1M/2_0/FXX，显示法国本土。

该数据集在 Guillaume Attard 和 Julien Bardonnet（[AGEOCE](https://www.ageoce.com)）的支持下准备和摄入。准备过程[在此描述](https://medium.com/@gui.attard/pre-processing-the-dem-of-france-rge-alti-5m-for-implementation-into-earth-engine-de9a0778e0d9)。

另见：[用户指南](https://geoservices.ign.fr/sites/default/files/2021-07/DC_RGEALTI_2-0.pdf)。

## 覆盖范围与时间

- 覆盖范围：法国本土
- 时间范围：2009-01-01 至 2021-01-01

## 分辨率与规格

- 空间分辨率：约 1 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| MNT | 地形高程（米）。 | 1 |  |
| SRC | 用于计算节点高程的数据的主要来源。见[用户指南](https://geoservices.ign.fr/sites/default/files/2021-07/DC_RGEALTI_2-0.pdf) 附录 B 第 26 页。 | 1 |  |
| DST | 节点与用于计算其高程的最近点之间的距离（米）。 | 1 |  |

## 能拿来做什么

- 1 米高精度地形分析
- 洪水风险制图
- 水文建模

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('IGN/RGE_ALTI/1M/2_0');
```

- 数据集编号（Earth Engine ID）：`IGN/RGE_ALTI/1M/2_0`
- 提供方：IGN、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IGN_RGE_ALTI_1M_2_0

## 许可与引用

- 许可：etalab-2.0
- 关键词：dem, elevation, elevation-topography, geophysical
- 数据引用：IGN (2021). RGE ALTI 1m [Data set]. Accessed 2022-07-01 from
[IGN website](https://geoservices.ign.fr/rgealti#telechargement1m)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)
- [SRTM 高程数据第 4 版（填洞版）](/pages/81d193ff/)
- [全球 ALOS 地形多样性](/pages/14e817f0/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
