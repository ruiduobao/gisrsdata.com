---
title: "哥白尼卫星海洋水色逐日数据（V6）"
date: 2026-11-03 12:00:00
permalink: /pages/78b315c3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "chlorophyll-a"
  - "copernicus"
  - "daily"
  - "oceans"
---

# 哥白尼卫星海洋水色逐日数据（V6）

英文原名：Copernicus Satellite Ocean Color Daily Data

## 这是什么数据

本数据集提供由多个卫星传感器派生的全球海洋表层叶绿素 a 浓度和遥感反射率的逐日估计。

遥感反射率（Rrs）定义为离水辐亮度与向下辐照度之比，是反演其他海洋水色产品算法的主要输入。叶绿素 a（Chl-a）是浮游植物中的主要光合色素；浮游植物是海洋食物网的基础，贡献了全球约一半的光合作用。Chl-a 可以用不同算法从 Rrs 数据估计（细节见文档）。这里提供的是多算法融合的 Chl-a 估计：按每个像元的光学类型对各候选算法的适用性进行融合，从而在各种水体类型下都给出全球 Chl-a 的最佳估计。

文件是多传感器融合产品的全球逐日合成：SeaWiFS、MERIS、MODIS Aqua、VIIRS，以及（自 5.0 版起）OLCI。注意：Rrs 和 Chl-a 数据只在无云、无冰区域可用，因此把数据按更长时间段聚合可以得到更完整的空间覆盖。

本数据集使用欧洲空间局气候变化倡议项目（ESA OC-CCI）海洋水色分量开发的处理链软件生产。更多细节见数据[文档](https://dast.copernicus-climate.eu/documents/satellite-ocean-colour/v6.0/WP2-FDDP-2022-04_C3S2-Lot3_PUGS-of-v6.0-OceanColour-product_v1.1_FINAL.pdf)。

## 覆盖范围与时间

- 覆盖范围：全球海洋
- 时间范围：1997-01-01 至 2026-03-31
- 更新节奏：逐日合成

## 分辨率与规格

- 空间分辨率：约 4,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| MERIS_nobs | MERIS 传感器的观测次数 | 4000 |  |
| MODISA_nobs | MODIS-A 传感器的观测次数 | 4000 |  |
| OLCI-A_nobs | OLCI-A 传感器的观测次数 | 4000 |  |
| OLCI-B_nobs | OLCI-B 传感器的观测次数 | 4000 |  |
| SeaWiFS_nobs | SeaWiFS 传感器的观测次数 | 4000 |  |
| VIIRS_nobs | VIIRS 传感器的观测次数 | 4000 |  |
| chlor_a | 叶绿素 a 浓度 | 4000 |  |
| total_nobs | 总观测次数 | 4000 |  |
| Rrs_412 | 412 纳米遥感反射率 | 4000 |  |
| Rrs_443 | 443 纳米遥感反射率 | 4000 |  |
| Rrs_490 | 490 纳米遥感反射率 | 4000 |  |
| Rrs_510 | 510 纳米遥感反射率 | 4000 |  |
| Rrs_560 | 560 纳米遥感反射率 | 4000 |  |
| Rrs_665 | 665 纳米遥感反射率 | 4000 |  |
| Rrs_MERIS_nobs | MERIS 传感器的观测次数 | 4000 |  |
| Rrs_MODISA_nobs | MODIS-A 传感器的观测次数 | 4000 |  |
| Rrs_OLCI-A_nobs | OLCI-A 传感器的观测次数 | 4000 |  |
| Rrs_OLCI-B_nobs | OLCI-B 传感器的观测次数 | 4000 |  |
| Rrs_SeaWiFS_nobs | SeaWiFS 传感器的观测次数 | 4000 |  |
| Rrs_VIIRS_nobs | VIIRS 传感器的观测次数 | 4000 |  |
| Rrs_total_nobs | RRS 传感器的总观测次数 | 4000 |  |

## 能拿来做什么

- 1997 年以来全球叶绿素 a 的长时序记录
- 海洋水色气候数据记录与趋势分析
- 多源反射率算法开发

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/SATELLITE_OCEAN_COLOR/V6');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/SATELLITE_OCEAN_COLOR/V6`
- 提供方：Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_SATELLITE_OCEAN_COLOR_V6

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：chlorophyll-a, copernicus, daily, oceans
- 数据引用：Copernicus Climate Change Service (2019): Ocean colour daily data from 1997
to present derived from satellite observations. Copernicus Climate Change
Service (C3S) Climate Data Store (CDS). 
[doi:10.24381/cds.f85b319d](https://doi.org/10.24381/cds.f85b319d)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（OLCI，300 米）](/pages/f4ffb7b4/)
- [全球海洋水色反射率产品（多源，4 公里）](/pages/472dc170/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
