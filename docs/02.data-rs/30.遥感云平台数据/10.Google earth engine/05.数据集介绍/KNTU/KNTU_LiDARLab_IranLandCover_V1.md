---
title: "伊朗土地覆盖图 v1（13 类，2017）"
date: 2026-11-03 12:00:00
permalink: /pages/3e7ad12e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "iran"
  - "kntu"
  - "landcover"
  - "landuse-landcover"
---

# 伊朗土地覆盖图 v1（13 类，2017）

英文原名：Iran Land Cover Map v1 13-class (2017)

## 这是什么数据

伊朗全国土地覆盖图通过在 Google Earth Engine 云平台上处理 Sentinel 影像生成。为此，处理了 2,500 多景 Sentinel-1 与 11,000 多景 Sentinel-2 影像，制作出 2017 年的单一镶嵌数据集。然后，用大量参考样本训练一种基于对象的随机森林分类方法（13 个类别），生成伊朗全国土地覆盖图。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：伊朗；时间：2017 年；分辨率：10 米。
- 时间范围：2017-01-01 至 2018-01-01

## 分辨率与规格

- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | 分类。 | 10 |  |

## 能拿来做什么

- 伊朗土地覆盖制图
- 土地利用变化分析
- 环境监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('KNTU/LiDARLab/IranLandCover/V1');
```

- 数据集编号（Earth Engine ID）：`KNTU/LiDARLab/IranLandCover/V1`
- 提供方：K. N. Toosi University of Technology LiDAR Lab、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/KNTU_LiDARLab_IranLandCover_V1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：iran, kntu, landcover, landuse-landcover
- 数据引用：Ghorbanian, A., Kakooei, M., Amani, M., Mahdavi, S., Mohammadzadeh, A., &
Hasanlou, M. (2020). Improved land cover map of Iran using Sentinel imagery
within Google Earth Engine and a novel automatic workflow for land cover
classification using migrated training samples. ISPRS Journal of
Photogrammetry and Remote Sensing, 167, 276-288.
[doi:10.1016/j.isprsjprs.2020.07.013](https://doi.org/10.1016/j.isprsjprs.2020.07.013)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
