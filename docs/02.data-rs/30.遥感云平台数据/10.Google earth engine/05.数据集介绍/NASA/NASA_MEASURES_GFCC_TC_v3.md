---
title: "全球森林覆盖变化（GFCC）树木覆盖多年全球 30 米"
date: 2026-11-03 12:00:00
permalink: /pages/3d80ca78/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "forest"
  - "forest-biomass"
  - "glcf"
  - "landsat-derived"
  - "nasa"
  - "umd"
---

# 全球森林覆盖变化（GFCC）树木覆盖多年全球 30 米

英文原名：Global Forest Cover Change (GFCC) Tree Cover Multi-Year Global 30m

## 这是什么数据

Landsat 植被连续场（VCF）树木覆盖层包含每个 30 米像元中被高度超过 5 米的木本植被覆盖的水平地面百分比估计。数据集提供以 2000、2005、2010 与 2015 年为中心的四个时期。数据集源自 GFCC 地表反射率产品（GFCC30SR），它基于增强的全球陆地调查（GLS）数据集。GLS 数据集由 30 米分辨率的高分辨率 Landsat 5 专题制图仪（TM）与 Landsat 7 增强型专题制图仪 Plus（ETM+）影像组成。

树木覆盖，即高于给定高度的木本植物植被（包括叶、茎、枝等）的比例垂直投影面积，影响陆地能量与水分交换、光合作用与蒸腾、净初级生产力以及碳与养分通量。树木覆盖还影响野生动物的栖息地质量与移动、人类住宅财产价值以及其他生态系统服务。VCF 产品的连续分类方案能比传统离散分类方案更好地描绘土地覆盖梯度。对森林变化（如毁林与退化）的探测与监测而言，树木覆盖提供了一个可测量的属性来定义森林覆盖及其变化。树木覆盖随时间的变化可用于监测与检索特定地点的森林变化历史。

数据集已为四个年份时期生产：2000、2005、2010 与 2015，集合中每个可用的 WRS2 轨/行有一景影像。

提供方注：由于 NASA MEaSUREs 资助结束，本数据集的免费版本不再生产。有意者可在 www.terraPulse.com 获取更新与扩展版本。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2015 年；分辨率：30 米。
- 时间范围：2000-01-01 至 2015-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tree_canopy_cover | 被树木覆盖的像元面积百分比。 | 30 |  |
| uncertainty | tree-canopy_cover 的 RMSE。 | 30 |  |
| source_index | 用于特定像元的源影像标识。这是每景影像元数据数组「sources」的索引。仅 2000、2005 与 2010 年可用。 | 30 |  |

## 能拿来做什么

- 森林覆盖变化监测
- 毁林与森林退化评估
- 生态系统服务研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/MEASURES/GFCC/TC/v3');
```

- 数据集编号（Earth Engine ID）：`NASA/MEASURES/GFCC/TC/v3`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_MEASURES_GFCC_TC_v3
* [User's guide](https://lpdaac.usgs.gov/documents/1371/GFCC_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1370/GFCC_ATBD.pdf)

## 许可与引用

- 许可：proprietary
- 关键词：forest, forest-biomass, glcf, landsat-derived, nasa, umd
- 数据引用：Paper/Methods Citation: Sexton, J. O., Song, X.-P., Feng, M., Noojipady,
P., Anand, A., Huang, C., Kim, D.-H., Collins, K.M., Channan, S.,
DiMiceli, C., Townshend, J.R.G. (2013). Global, 30-m resolution
continuous fields of tree cover: Landsat-based rescaling of MODIS
Vegetation Continuous Fields with lidar-based estimates of error.
International Journal of Digital Earth, 130321031236007.
[doi:10.1080/17538947.2013.786146](https://doi.org/10.1080/17538947.2013.786146).

- DOI：10.5067/MEaSUREs/GFCC/GFCC30TC.003

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)
- [GCOM-C/SGLI 三级叶面积指数产品（V2）](/pages/9acc1a9f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
