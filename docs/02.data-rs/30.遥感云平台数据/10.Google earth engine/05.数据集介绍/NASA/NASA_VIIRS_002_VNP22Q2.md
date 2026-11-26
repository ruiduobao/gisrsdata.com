---
title: "VNP22Q2.002：地表物候年度三级全球 500 米 SIN 格网"
date: 2026-11-03 12:00:00
permalink: /pages/1fdf80f4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "land"
  - "nasa"
  - "ndvi"
  - "noaa"
  - "npp"
  - "onset-greenness"
  - "phenology"
  - "surface"
  - "vegetation"
  - "vegetation-indices"
  - "viirs"
---

# VNP22Q2.002：地表物候年度三级全球 500 米 SIN 格网

英文原名：VNP22Q2.002: Land Surface Phenology Yearly L3 Global 500m SIN Grid

## 这是什么数据

Suomi 国家极轨伙伴（Suomi NPP）NASA 可见光红外成像辐射计套件（VIIRS）地表物候年度（VNP22Q2）版本 2 数据产品以年度间隔提供全球地表物候（GLSP）指标。VNP22Q2 数据产品源自从 VIIRS 天底双向反射分布函数（BRDF）调整反射率（NBAR）计算的双波段增强植被指数（EVI2）时间序列。500 米空间分辨率的植被物候指标每年识别多达两个探测到的生长周期。

产品包含六个物候过渡日期：绿度增加起始、绿度最大起始、绿度下降起始、绿度最小起始、返青中期日期与衰老阶段。产品还包括生长季长度。与绿度相关的指标包括 EVI2 绿度增加起始、EVI2 绿度最大起始、EVI2 生长季、绿度增加率与绿度下降率。物候探测的置信度以绿度一致性生长季、良好质量比例（PGQ）生长季、PGQ 绿度增加起始、PGQ 绿度最大起始、PGQ 绿度下降起始与 PGQ 绿度最小起始提供。最后一层是质量控制，指定产品的总体质量。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2013 年至 2025 年；分辨率：500 米。
- 时间范围：2013-01-01 至 2025-01-01

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Date_Mid_Greenup_Phase_1 | 返青中期阶段的日期。 | 500 |  |
| Date_Mid_Senescence_Phase_1 | 衰老中期阶段的日期。 | 500 |  |
| EVI2_Growing_Season_Area_1 | 一个生长季内的 EVI2 积分。 | 500 |  |
| EVI2_Onset_Greenness_Increase_1 | 返青起始处的 EVI2 值。 | 500 |  |
| EVI2_Onset_Greenness_Maximum_1 | 成熟起始处的 EVI2 值。 | 500 |  |
| GLSP_QC_1 | 全球地表物候质量控制。 | 500 |  |
| Greenness_Agreement_Growing_Season_1 | 建模值与原始观测之间的 EVI2 一致性。 | 500 |  |
| Growing_Season_Length_1 | 生长季长度。 | 500 |  |
| Onset_Greenness_Decrease_1 | 冠层绿度开始下降的日期。 | 500 |  |
| Onset_Greenness_Increase_1 | 绿度增加起始的日期。 | 500 |  |
| Onset_Greenness_Maximum_1 | 冠层绿度接近季节最大的日期。 | 500 |  |
| Onset_Greenness_Minimum_1 | 冠层绿度达到最小的日期。 | 500 |  |
| PGQ_Growing_Season_1 | 植被生长季内 VIIRS 观测的良好质量比例。 | 500 |  |
| PGQ_Onset_Greenness_Decrease_1 | 衰老起始周围的良好质量比例。 | 500 |  |
| PGQ_Onset_Greenness_Increase_1 | 返青起始周围的良好质量比例。 | 500 |  |
| PGQ_Onset_Greenness_Maximum_1 | 成熟起始周围的良好质量比例。 | 500 |  |
| PGQ_Onset_Greenness_Minimum_1 | 休眠起始周围的良好质量比例。 | 500 |  |
| Rate_Greenness_Decrease_1 | 衰老阶段 EVI2 值的变化率。 | 500 |  |
| Rate_Greenness_Increase_1 | 返青阶段 EVI2 值的变化率。 | 500 |  |
| Date_Mid_Greenup_Phase_2 | 返青中期阶段的日期。 | 500 |  |
| Date_Mid_Senescence_Phase_2 | 衰老中期阶段的日期。 | 500 |  |
| EVI2_Growing_Season_Area_2 | 一个生长季内的 EVI2 积分。 | 500 |  |
| EVI2_Onset_Greenness_Increase_2 | 返青起始处的 EVI2 值。 | 500 |  |
| EVI2_Onset_Greenness_Maximum_2 | 成熟起始处的 EVI2 值。 | 500 |  |
| GLSP_QC_2 | 全球地表物候质量控制。 | 500 |  |
| Greenness_Agreement_Growing_Season_2 | 建模值与原始观测之间的 EVI2 一致性。 | 500 |  |
| Growing_Season_Length_2 | 生长季长度。 | 500 |  |
| Onset_Greenness_Decrease_2 | 冠层绿度开始下降的日期。 | 500 |  |
| Onset_Greenness_Increase_2 | 绿度增加起始的日期。 | 500 |  |
| Onset_Greenness_Maximum_2 | 冠层绿度接近季节最大的日期。 | 500 |  |
| Onset_Greenness_Minimum_2 | 冠层绿度达到最小的日期。 | 500 |  |
| PGQ_Growing_Season_2 | 植被生长季内 VIIRS 观测的良好质量比例。 | 500 |  |
| PGQ_Onset_Greenness_Decrease_2 | 衰老起始周围的良好质量比例。 | 500 |  |
| PGQ_Onset_Greenness_Increase_2 | 返青起始周围的良好质量比例。 | 500 |  |
| PGQ_Onset_Greenness_Maximum_2 | 成熟起始周围的良好质量比例。 | 500 |  |
| PGQ_Onset_Greenness_Minimum_2 | 休眠起始周围的良好质量比例。 | 500 |  |
| Rate_Greenness_Decrease_2 | 衰老阶段 EVI2 值的变化率。 | 500 |  |
| Rate_Greenness_Increase_2 | 返青阶段 EVI2 值的变化率。 | 500 |  |

## 能拿来做什么

- 植被物候监测
- 生长季分析
- 生态系统研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP22Q2');
```

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP22Q2`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP22Q2
* [User's Guide](https://lpdaac.usgs.gov/documents/2263/VNP22_UserGuide_v2.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/2228/VNP22_ATBD_V2.pdf)
* [General Documentation](https://doi.org/10.5067/VIIRS/VNP22Q2.002)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 许可与引用

- 许可：proprietary
- 关键词：land, nasa, ndvi, noaa, npp, onset-greenness, phenology, surface, vegetation, vegetation-indices, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP22Q2.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP13A1.002：VIIRS 植被指数 16 天 500 米](/pages/fed65b36/)
- [VNP15A2H：LAI/FPAR 8 天四级全球 500 米 SIN 格网](/pages/50cd4868/)
- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
