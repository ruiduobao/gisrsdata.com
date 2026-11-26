---
title: "MCD43A1.006 MODIS BRDF-反照率模型参数日产品 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/dba783be/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "brdf"
  - "daily"
  - "global"
  - "mcd43a1"
  - "modis"
  - "nasa"
  - "reflectance"
  - "satellite-imagery"
  - "usgs"
---

# MCD43A1.006 MODIS BRDF-反照率模型参数日产品 500 米（已弃用）

英文原名：MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]

## 这是什么数据

MCD43A1 V6 双向反射分布函数与反照率（BRDF/反照率）模型参数数据集是一个 500 米日 16 天产品。儒略日期代表 16 天反演时段的第 9 天，因此观测被加权以估计该日的 BRDF/反照率。MCD43A1 算法与所有组合产品一样，从包括 Terra 与 Aqua 传感器在反演时段内所有获取的池中选择最佳代表像元。

MCD43A1 为 MODIS 波段 1 至 7 以及用于推导反照率与 BRDF 产品（MCD43A3 与 MCD43A4）的可见光（vis）、近红外（nir）与短波波段中的每一个提供三个模型权重参数（各向同性、体积与几何）。还提供 10 个波段中每个波段的强制质量层。

更多信息见[数据集用户指南](https://www.umb.edu/spectralmass/terra_aqua_modis/v006/mcd43a1_brdif_albedo_model_parameters_product)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2023 年；分辨率：500 米。
- 时间范围：2000-02-24 至 2023-02-10

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BRDF_Albedo_Parameters_Band1_iso | 波段 1的 BRDF/反照率各向同性参数。 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band1_vol | 波段 1的 BRDF/反照率体积参数。 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band1_geo | 波段 1的 BRDF/反照率几何参数。 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band2_iso | 波段 2的 BRDF/反照率各向同性参数。 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band2_vol | 波段 2的 BRDF/反照率体积参数。 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band2_geo | 波段 2的 BRDF/反照率几何参数。 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band3_iso | 波段 3的 BRDF/反照率各向同性参数。 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band3_vol | 波段 3的 BRDF/反照率体积参数。 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band3_geo | 波段 3的 BRDF/反照率几何参数。 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band4_iso | 波段 4的 BRDF/反照率各向同性参数。 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band4_vol | 波段 4的 BRDF/反照率体积参数。 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band4_geo | 波段 4的 BRDF/反照率几何参数。 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band5_iso | 波段 5的 BRDF/反照率各向同性参数。 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band5_vol | 波段 5的 BRDF/反照率体积参数。 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band5_geo | 波段 5的 BRDF/反照率几何参数。 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band6_iso | 波段 6的 BRDF/反照率各向同性参数。 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band6_vol | 波段 6的 BRDF/反照率体积参数。 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band6_geo | 波段 6的 BRDF/反照率几何参数。 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band7_iso | 波段 7的 BRDF/反照率各向同性参数。 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_Band7_vol | 波段 7的 BRDF/反照率体积参数。 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_Band7_geo | 波段 7的 BRDF/反照率几何参数。 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_vis_iso | 可见光宽波段的 BRDF/反照率各向同性参数。 | 500 |  |
| BRDF_Albedo_Parameters_vis_vol | 可见光宽波段的 BRDF/反照率体积参数。 | 500 |  |
| BRDF_Albedo_Parameters_vis_geo | 可见光宽波段的 BRDF/反照率几何参数。 | 500 |  |
| BRDF_Albedo_Parameters_nir_iso | 近红外宽波段的 BRDF/反照率各向同性参数。 | 500 | 858nm |
| BRDF_Albedo_Parameters_nir_vol | 近红外宽波段的 BRDF/反照率体积参数。 | 500 | 858nm |
| BRDF_Albedo_Parameters_nir_geo | 近红外宽波段的 BRDF/反照率几何参数。 | 500 | 858nm |
| BRDF_Albedo_Parameters_shortwave_iso | 短波宽波段的 BRDF/反照率各向同性参数。 | 500 |  |
| BRDF_Albedo_Parameters_shortwave_vol | 短波宽波段的 BRDF/反照率体积参数。 | 500 |  |
| BRDF_Albedo_Parameters_shortwave_geo | 短波宽波段的 BRDF/反照率几何参数。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band1 | 波段 1的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band2 | 波段 2的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band3 | 波段 3的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band4 | 波段 4的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band5 | 波段 5的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band6 | 波段 6的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band7 | 波段 7的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_vis | 可见光宽波段的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_nir | 近红外宽波段的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_shortwave | 短波宽波段的 BRDF 反照率强制质量。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MCD43A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD43A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A1
* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD43A1)

## 许可与引用

- 许可：proprietary
- 关键词：albedo, brdf, daily, global, mcd43a1, modis, nasa, reflectance, satellite-imagery, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)
- [MCD43C3.006 BRDF/Albedo Daily L3 0.05 Deg CMG [deprecated]](/pages/95ebbb0d/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
