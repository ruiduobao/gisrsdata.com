---
title: "哨兵-2 云概率"
date: 2026-11-03 12:00:00
permalink: /pages/1a2cfa86/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cloud"
  - "copernicus"
  - "esa"
  - "eu"
  - "msi"
  - "radiance"
  - "satellite-imagery"
  - "sentinel"
  - "sentinelhub"
---

# 哨兵-2 云概率

英文原名：Sentinel-2: Cloud Probability

## 这是什么数据

哨兵-2 云概率由 [sentinel2-cloud-detector](https://github.com/sentinel-hub/sentinel2-cloud-detector) 库（使用 [LightGBM](https://github.com/microsoft/LightGBM)）生成。应用梯度提升算法之前，全部波段先用双线性插值上采样到 10 米分辨率。得到的 0..1 浮点概率被缩放为 0..100 并存为 UINT8。缺失任一或全部波段的区域被掩膜。数值越高，越可能是云或高反射表面（如屋顶、积雪）。

哨兵-2 是宽幅、高分辨率、多光谱成像任务，支撑哥白尼陆地监测研究，包括植被、土壤和水体覆盖监测，以及内陆水道和近岸区域观测。

二级数据见集合 [COPERNICUS/S2_SR_HARMONIZED](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR_HARMONIZED)；一级 B 数据见集合 [COPERNICUS/S2_HARMONIZED](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED)。这些集合的资产上还有更多元数据。

云掩膜的用法见[这篇教程](https://developers.google.com/earth-engine/tutorials/community/sentinel-2-s2cloudless)。

## 覆盖范围与时间

- 覆盖范围：哨兵-2 成像的全球陆地与近岸区域
- 时间范围：2015-06-27 至 2026-11-03

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| probability | 该像元为云的概率 | 10 |  |

## 能拿来做什么

- 哨兵-2 影像的云掩膜（s2cloudless 流程）
- 植被与陆地分析前筛选无云场景
- 识别屋顶、积雪等高反射表面

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S2_CLOUD_PROBABILITY');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S2_CLOUD_PROBABILITY`
- 提供方：European Union/ESA/Copernicus/SentinelHub、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_CLOUD_PROBABILITY

## 许可与引用

- 许可：proprietary
- 关键词：cloud, copernicus, esa, eu, msi, radiance, satellite-imagery, sentinel, sentinelhub
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Landsat 8 二级地表反射率与地表温度数据](/pages/778e3960/)
- [协调版哨兵-2 MSI 一级 C 大气顶反射率](/pages/07bc7cbd/)
- [协调版哨兵-2 MSI 二级 A 地表反射率](/pages/0620c27d/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
