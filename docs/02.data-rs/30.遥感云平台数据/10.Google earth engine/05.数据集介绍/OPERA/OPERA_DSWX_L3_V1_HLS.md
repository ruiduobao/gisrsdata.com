---
title: "协调 Landsat Sentinel-2 动态地表水体范围（DSWx-HLS）V1"
date: 2026-11-03 12:00:00
permalink: /pages/0bb51b32/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "geophysical"
  - "landsat-derived"
  - "nasa"
  - "opera"
  - "sentinel2-derived"
  - "surface"
  - "surface-ground-water"
  - "water"
---

# 协调 Landsat Sentinel-2 动态地表水体范围（DSWx-HLS）V1

英文原名：Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1

## 这是什么数据

本数据集包含 3 级动态 OPERA 地表水体范围产品第 1 版。数据为 2023 年 4 月起经过验证的地表水体范围观测。使用中的已知问题与注意事项在产品文档中说明。生成每个产品的输入数据集是协调 Landsat-8 与 Sentinel-2A/B/C（HLS）产品 2.0 版。HLS 产品提供 Landsat 8 卫星陆地成像仪（OLI）与 Sentinel-2A/B/C 卫星多光谱成像仪（MSI）的地表反射率（SR）数据。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地；时间：2023 年至今；分辨率：30 米。
- 时间范围：2023-04-04 至 2026-10-27

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| WTR_Water_classification | 水体分类——将诊断（DIAG）层经过所有中间步骤/层处理后，逐像元分类为三类水体之一（非水体、开放水体与部分地表水体）、雪/冰、云/云影及云/云影邻近、海洋掩膜或无数据类 | 30 |  |
| BWTR_Binary_water | 二值水体图由 WTR 层派生，将水体类（开放水体与部分地表水体）合并为表示有水与无水的二值图。此层旨在为用户提供水体/非水体的快速视图。还提供无效数据类（雪/冰、云/云影及云/云影邻近、海洋掩膜与填充值），以标明二值分类不提供水体/非水体分类的区域。 | 30 |  |
| CONF_Confidence | 与 WTR 分类相关的置信度表示，基于 DIAG 结果与输入 HLS 数据提供的质量保证信息的组合。例如，WTR 层的开放水体类被分为两类：高置信与中等置信；WTR 的部分地表水体类像元被标记为部分地表水体保守型或部分地表水体激进型，后者确定性更低。与 WTR 与 BWTR 层一样，因雪/冰、云/云影或填充值而难以或无法反演水体的像元也在 CONF 层中注明。 | 30 |  |
| DIAG_diagnostic | 编码层，标明五个初始 DSWx-HLS 检验中哪些对每个像元的水体探测为阳性。取值范围从 0（即 00000，表示五项检验均无阳性结果）到 11111（表示全部检验阳性）。这些检验在 [DSWX-HLS ATBD](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/atbd/DSWx-HLS_ATBD_V1_4_DAAC_Distribution.pdf) 与 [Jones, John W. 2019](https://doi.org/10.3390/rs11040374) 中说明，用于派生上述置信层。特定类的阳性检验组合决定其置信值。填充值（无数据）以数字 65535 表示。 | 30 |  |
| WTR1_Interpretation_of_diagnostic_layer_into_water_classes | 将 DIAG 层分类为开放水体、部分地表水体与非水体。此层经掩膜进一步细化，得到第 6 层（WTR-2）与第 1 层（WTR）。 | 30 |  |
| WTR2_Refined_WTR1_given_HLS_FMASK | WTR-2 层由 WTR-1（第 5 层）结果派生，按 [DSWX-HLS ATBD](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/atbd/DSWx-HLS_ATBD_V1_4_DAAC_Distribution.pdf) 与 [Jones, John W. 2019](https://doi.org/10.3390/rs11040374) 所述，应用基于土地覆盖与地形阴影信息的附加检验以及气溶胶过校正缓解，以掩膜（消除）假阳性水体探测。 | 30 |  |
| LAND_land_cover_classification | 土地覆盖专题层，用于确定在何处执行附加检验，以可能掩膜 WTR-1 层的水体探测，生成中间层 WTR-2。 | 30 |  |
| SHAD_terrain_shadow | 用于消除地形阴影可能位置的掩膜，基于由数字高程模型数据为输入 HLS 影像获取日期/时间生成的阴影区域分类。用于创建中间层 WTR-2。 | 30 |  |
| HLS_CLOUD_SNOW_FMASK_classification | 来自 HLS 输入的云、云影与雪/冰分类层。 | 30 |  |

## 能拿来做什么

- 做湖泊、河流与洪水范围的动态监测。
- 为水资源管理提供地表水体时序数据。
- 与 SAR 版 DSWx-S1 互补做全天候水体监测。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OPERA/DSWX/L3_V1/HLS');
```

- 数据集编号（Earth Engine ID）：`OPERA/DSWX/L3_V1/HLS`
- 提供方：NASA JPL、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OPERA_DSWX_L3_V1_HLS
* [DSWx-HLS Product Specification Document](https://d2pn8kiwq2w21t.cloudfront.net/documents/OPERA_DSWx-HLS_ProductSpec_v1.0.0_D-107395_RevB.pdf)
* [DSWx Product Suite Website](https://www.jpl.nasa.gov/go/opera/products/dswx-product-suite/)
* [DSWx-HLS Algorithm Theoretical Basis Document (ATBD)](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/atbd/DSWx-HLS_ATBD_V1_4_DAAC_Distribution.pdf)

## 许可与引用

- 许可：proprietary
- 关键词：geophysical, landsat-derived, nasa, opera, sentinel2-derived, surface, surface-ground-water, water
- 数据引用：OPERA . 2023. OPERA Dynamic Surface Water Extent from Harmonized Landsat
Sentinel-2 (Version 1). Ver. 1.0. PO.DAAC, CA, USA. Dataset accessed
[YYYY-MM-DD] at https://doi.org/10.5067/OPDSW-PL3V1

- DOI：10.5067/OPDSW-PL3V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Sentinel-1 动态地表水体范围（DSWx-S1）V1](/pages/e1121614/)
- [GFPLAIN250 米：全球 250 米洪泛区数据集](/pages/fcae03ea/)
- [GLCF：Landsat 全球内陆水体](/pages/500a347f/)
- [GRACE 月度质量格网版本 06 第 04 版 - 陆地](/pages/d281cddf/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
