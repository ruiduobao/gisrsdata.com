---
title: "VNP22Q2：地表物候逐年 L3 全球 500 米 SIN 网格 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/985a7db1/
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

# VNP22Q2：地表物候逐年 L3 全球 500 米 SIN 网格 [已弃用]

英文原名：VNP22Q2: Land Surface Phenology Yearly L3 Global 500m SIN Grid [deprecated]

## 这是什么数据

Suomi 国家极轨伙伴（Suomi NPP）NASA 可见红外成像辐射计套件（VIIRS）土地覆盖动态数据产品，以逐年间隔提供全球地表物候（GLSP）指标。VNP22Q2 数据产品源自 VIIRS 天底双向反射分布函数（BRDF）调整反射率（NBAR）计算的两波段增强植被指数（EVI2）时间序列。500 米空间分辨率的植被物候指标每年最多识别两个生长周期。

本产品包含六个物候转换日期：绿度增加起始、绿度最大起始、绿度下降起始、绿度最小起始、返青中期日期与衰老阶段日期。产品还包括生长季长度。与绿度相关的指标包括 EVI2 绿度增加起始、EVI2 绿度最大起始、EVI2 生长季、绿度增加速率与绿度下降速率。物候探测的置信度以绿度一致性生长季、优质比例（PGQ）生长季、PGQ 绿度增加起始、PGQ 绿度最大起始、PGQ 绿度下降起始与 PGQ 绿度最小起始给出。最后一层是质量控制，标明产品的整体质量。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地；时间：2013 年至 2022 年（逐年）；分辨率：500 米。
- 时间范围：2013-01-01 至 2022-01-01

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Date_Mid_Greenup_Phase_1 | 返青中期阶段的日期 | 500 |  |
| Date_Mid_Senescence_Phase_1 | 衰老中期阶段的日期 | 500 |  |
| EVI2_Growing_Season_Area_1 | 一个生长季内的 EVI2 积分 | 500 |  |
| EVI2_Onset_Greenness_Increase_1 | 返青起始时的 EVI2 值 | 500 |  |
| EVI2_Onset_Greenness_Maximum_1 | 成熟起始时的 EVI2 值 | 500 |  |
| GLSP_QC_1 | 全球地表物候质量控制 | 500 |  |
| Greenness_Agreement_Growing_Season_1 | EVI2 模型值与原始观测的一致性 | 500 |  |
| Growing_Season_Length_1 | 生长季长度 | 500 |  |
| Onset_Greenness_Decrease_1 | 冠层绿度开始下降的日期 | 500 |  |
| Onset_Greenness_Increase_1 | 绿度开始增加的日期 | 500 |  |
| Onset_Greenness_Maximum_1 | 冠层绿度接近季节最大值的日期 | 500 |  |
| Onset_Greenness_Minimum_1 | 冠层绿度达到最小值的日期 | 500 |  |
| PGQ_Growing_Season_1 | 植被生长季内 VIIRS 观测的优质比例 | 500 |  |
| PGQ_Onset_Greenness_Decrease_1 | 衰老起始附近的优质比例 | 500 |  |
| PGQ_Onset_Greenness_Increase_1 | 返青起始附近的优质比例 | 500 |  |
| PGQ_Onset_Greenness_Maximum_1 | 成熟起始附近的优质比例 | 500 |  |
| PGQ_Onset_Greenness_Minimum_1 | 休眠起始附近的优质比例 | 500 |  |
| Rate_Greenness_Decrease_1 | 衰老阶段 EVI2 值的变化速率 | 500 |  |
| Rate_Greenness_Increase_1 | 返青阶段 EVI2 值的变化速率 | 500 |  |
| Date_Mid_Greenup_Phase_2 | 返青中期阶段的日期 | 500 |  |
| Date_Mid_Senescence_Phase_2 | 衰老中期阶段的日期 | 500 |  |
| EVI2_Growing_Season_Area_2 | 一个生长季内的 EVI2 积分 | 500 |  |
| EVI2_Onset_Greenness_Increase_2 | 返青起始时的 EVI2 值 | 500 |  |
| EVI2_Onset_Greenness_Maximum_2 | 成熟起始时的 EVI2 值 | 500 |  |
| GLSP_QC_2 | 全球地表物候质量控制 | 500 |  |
| Greenness_Agreement_Growing_Season_2 | EVI2 模型值与原始观测的一致性 | 500 |  |
| Growing_Season_Length_2 | 生长季长度 | 500 |  |
| Onset_Greenness_Decrease_2 | 冠层绿度开始下降的日期 | 500 |  |
| Onset_Greenness_Increase_2 | 绿度开始增加的日期 | 500 |  |
| Onset_Greenness_Maximum_2 | 冠层绿度接近季节最大值的日期 | 500 |  |
| Onset_Greenness_Minimum_2 | 冠层绿度达到最小值的日期 | 500 |  |
| PGQ_Growing_Season_2 | 植被生长季内 VIIRS 观测的优质比例 | 500 |  |
| PGQ_Onset_Greenness_Decrease_2 | 衰老起始附近的优质比例 | 500 |  |
| PGQ_Onset_Greenness_Increase_2 | 返青起始附近的优质比例 | 500 |  |
| PGQ_Onset_Greenness_Maximum_2 | 成熟起始附近的优质比例 | 500 |  |
| PGQ_Onset_Greenness_Minimum_2 | 休眠起始附近的优质比例 | 500 |  |
| Rate_Greenness_Decrease_2 | 衰老阶段 EVI2 值的变化速率 | 500 |  |
| Rate_Greenness_Increase_2 | 返青阶段 EVI2 值的变化速率 | 500 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP22Q2');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP22Q2`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP22Q2
* [User's Guide](https://lpdaac.usgs.gov/documents/637/VNP22_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/637/VNP22_User_Guide_V1.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp22q2v001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 许可与引用

- 许可：proprietary
- 关键词：land, nasa, ndvi, noaa, npp, onset-greenness, phenology, surface, vegetation, vegetation-indices, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP22Q2.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP13A1.001：VIIRS 植被指数 16 天 500 米 [已弃用]](/pages/e2cab212/)
- [VNP15A2H：叶面积指数/光合有效辐射分量 8 天 L4 全球 500 米 SIN 网格 [已弃用]](/pages/abb03285/)
- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
