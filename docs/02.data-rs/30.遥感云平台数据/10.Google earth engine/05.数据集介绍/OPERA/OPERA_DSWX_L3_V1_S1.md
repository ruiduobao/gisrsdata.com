---
title: "Sentinel-1 动态地表水体范围（DSWx-S1）V1"
date: 2026-11-03 12:00:00
permalink: /pages/e1121614/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "geophysical"
  - "nasa"
  - "opera"
  - "sentinel1-derived"
  - "surface"
  - "surface-ground-water"
  - "water"
---

# Sentinel-1 动态地表水体范围（DSWx-S1）V1

英文原名：Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1

## 这是什么数据

本数据集包含来自 Sentinel-1 的 3 级动态 OPERA 地表水体范围（DSWX-S1）。DSWx-S1 以 30 米空间分辨率在军事格网参考系统（MGRS）格网上提供近全球陆地地表水体范围制图，时间重访频率为 6–12 天。DSWx-S1 使用 Sentinel-1 雷达观测，制图面积大于 3 公顷、宽度大于 200 米的开放内陆水体，不受常给光学传感器带来挑战的云条件与日光照射影响。DSWx-S1 数据记录的前向生产于 2024 年 9 月开始。

## 覆盖范围与时间

- 覆盖范围：空间：近全球陆地；时间：2024 年至今（6–12 天重访）；分辨率：30 米。
- 时间范围：2024-08-01 至 2026-10-28

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| WTR_Water_classification | 掩膜后的解释水体分类层。逐像元分类为三类水体之一（非水体、开放水体与淹没植被）、掩膜（HAND 掩膜与叠掩/阴影掩膜）或无数据类。 | 30 |  |
| BWTR_Binary_water | 二值水体图由 WTR 层派生，将水体类（开放水体与淹没植被）合并为表示有水与无水的二值图。还提供无效数据类（HAND 掩膜、叠掩/阴影掩膜与填充值），以标明二值分类不提供水体/非水体分类的区域。 | 30 |  |
| CONF_Confidence | 与 WTR 分类相关的置信度表示，基于 DIAG 结果。例如，WTR 层的开放水体类被分为两类：高置信与中等置信。此外，此层还包括低后向散射但非水体的区域：低后向散射非水体与土地覆盖掩膜。这些分类的详细说明见 [DSWx-S1 ATBD](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/atbd/D-108763_Rev_A_OPERA_DSWx_S1_NI_ATBD_20240530_SIGNED.pdf)。与 WTR 与 BWTR 层类似，置信（CONF）层也标记因叠掩/阴影效应、无数据区域以及水文上不合实际的水体存在区域（由 HAND 掩膜识别）而使水体探测困难或不可行的像元。 | 30 |  |
| DIAG_diagnostic | 使用包括 HAND、地形坡度角、参考水体与 RTC-S1 后向散射在内的辅助数据并应用特定阈值计算的模糊值指标。取值范围 0 到 100，值越高表示存在开放水体的可能性越大。 | 30 |  |

## 能拿来做什么

- 做多云地区与洪水应急的地表水体制图。
- 监测湖泊与湿地的水面变化。
- 与光学 DSWx-HLS 交叉验证水体范围。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OPERA/DSWX/L3_V1/S1');
```

- 数据集编号（Earth Engine ID）：`OPERA/DSWX/L3_V1/S1`
- 提供方：NASA JPL、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OPERA_DSWX_L3_V1_S1
* [DSWx-S1 Product Specification Document](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/D-108761_OPERA_DSWx_S1AB_ProductSpec_Rev_A.pdf)
* [DSWx Product Suite Website](https://www.jpl.nasa.gov/go/opera/products/dswx-product-suite/)
* [DSWx-S1 Algorithm Theoretical Basis Document](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/atbd/D-108763_Rev_A_OPERA_DSWx_S1_NI_ATBD_20240530_SIGNED.pdf)

## 许可与引用

- 许可：proprietary
- 关键词：geophysical, nasa, opera, sentinel1-derived, surface, surface-ground-water, water
- 数据引用：OPERA . 2024. OPERA Dynamic Surface Water Extent from Sentinel-1 product
(Version 1). Ver. 1.0. PO.DAAC, CA, USA. Dataset accessed [YYYY-MM-DD]
at https://doi.org/10.5067/OPDSWS1-L3V1

- DOI：10.5067/OPDSWS1-L3V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [协调 Landsat Sentinel-2 动态地表水体范围（DSWx-HLS）V1](/pages/0bb51b32/)
- [GFPLAIN250 米：全球 250 米洪泛区数据集](/pages/fcae03ea/)
- [GLCF：Landsat 全球内陆水体](/pages/500a347f/)
- [GRACE 月度质量格网版本 06 第 04 版 - 陆地](/pages/d281cddf/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
