---
title: "MCD43A1.005 BRDF-反照率模型参数 16 天 L3 全球 500 米 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/93efe7d4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "albedo"
  - "brdf"
  - "global"
  - "mcd43a1"
  - "modis"
  - "reflectance"
  - "satellite-imagery"
  - "usgs"
---

# MCD43A1.005 BRDF-反照率模型参数 16 天 L3 全球 500 米 [已弃用]

英文原名：MCD43A1.005 BRDF-Albedo Model Parameters 16-Day L3 Global 500m [deprecated]

## 这是什么数据

中分辨率成像光谱仪（MODIS）BRDF/反照率模型参数产品（MCD43A1）包含为用户提供用于推导反照率与 BRDF 产品（MCD43A3 与 MCD43A4）的模型的权重参数的数据集。这些模型支持最能描述每个像元因散射（各向异性）引起的辐射差异的空间关系与参数表征，依赖于在 16 天时段内测量的多日期、大气校正、去云的输入数据。本产品生成时同时使用 Terra 与 Aqua 数据，为高质量输入数据提供最高概率，并将其指定为 MCD（即组合）产品。

版本 5 的 MODIS/Terra+Aqua BRDF/反照率产品为验证阶段 1，意味着精度已使用从选定地点与时段获得的少量独立测量以及地面真值/外业计划工作做了估计。尽管之后可能有改进版本，这些数据已可用于科学出版物。

请访问 [LP DAAC「引用我们的数据」页面](https://lpdaac.usgs.gov/citing_our_data) 了解引用 LP DAAC 数据集的信息。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2017 年；分辨率：500 米。
- 时间范围：2000-02-18 至 2017-03-14

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BRDF_Albedo_Parameters_Band1_iso | 波段 1 的 BDRF/反照率各向同性参数。 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band1_vol | 波段 1 的 BDRF/反照率体积参数。 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band1_geo | 波段 1 的 BDRF/反照率几何参数。 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band2_iso | 波段 2 的 BDRF/反照率各向同性参数。 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band2_vol | 波段 2 的 BDRF/反照率体积参数。 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band2_geo | 波段 2 的 BDRF/反照率几何参数。 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band3_iso | 波段 3 的 BDRF/反照率各向同性参数。 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band3_vol | 波段 3 的 BDRF/反照率体积参数。 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band3_geo | 波段 3 的 BDRF/反照率几何参数。 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band4_iso | 波段 4 的 BDRF/反照率各向同性参数。 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band4_vol | 波段 4 的 BDRF/反照率体积参数。 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band4_geo | 波段 4 的 BDRF/反照率几何参数。 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band5_iso | 波段 5 的 BDRF/反照率各向同性参数。 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band5_vol | 波段 5 的 BDRF/反照率体积参数。 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band5_geo | 波段 5 的 BDRF/反照率几何参数。 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band6_iso | 波段 6 的 BDRF/反照率各向同性参数。 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band6_vol | 波段 6 的 BDRF/反照率体积参数。 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band6_geo | 波段 6 的 BDRF/反照率几何参数。 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band7_iso | 波段 7 的 BDRF/反照率各向同性参数。 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_Band7_vol | 波段 7 的 BDRF/反照率体积参数。 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_Band7_geo | 波段 7 的 BDRF/反照率几何参数。 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_vis_iso | 可见光波段的 BDRF/反照率各向同性参数。 | 500 |  |
| BRDF_Albedo_Parameters_vis_vol | 可见光波段的 BDRF/反照率体积参数。 | 500 |  |
| BRDF_Albedo_Parameters_vis_geo | 可见光波段的 BDRF/反照率几何参数。 | 500 |  |
| BRDF_Albedo_Parameters_nir_iso | 近红外波段的 BDRF/反照率各向同性参数。 | 500 | 858nm |
| BRDF_Albedo_Parameters_nir_vol | 近红外波段的 BDRF/反照率体积参数。 | 500 | 858nm |
| BRDF_Albedo_Parameters_nir_geo | 近红外波段的 BDRF/反照率几何参数。 | 500 | 858nm |
| BRDF_Albedo_Parameters_shortwave_iso | 短波波段的 BDRF/反照率各向同性参数。 | 500 |  |
| BRDF_Albedo_Parameters_shortwave_vol | 短波波段的 BDRF/反照率体积参数。 | 500 |  |
| BRDF_Albedo_Parameters_shortwave_geo | 短波波段的 BDRF/反照率几何参数。 | 500 |  |
| BRDF_Shape_Indicators_ANIF | 各向异性指数。 | 500 |  |
| BRDF_Shape_Indicators_AFX | 各向异性平坦指数。 | 500 |  |
| BRDF_Shape_Indicators_NDAX | 归一化差值各向异性指数。 | 500 |  |
| BRDF_Shape_Indicators_SSI | 雪形状指数。 | 500 |  |

## 能拿来做什么

- BRDF/反照率建模
- 地表反射率校正
- 辐射传输研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/MCD43A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/MCD43A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A1

## 许可与引用

- 许可：proprietary
- 关键词：16-day, albedo, brdf, global, mcd43a1, modis, reflectance, satellite-imagery, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/pages/4a61128e/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
