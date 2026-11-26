---
title: "哥白尼大气监测服务（CAMS）全球近实时数据"
date: 2026-11-03 12:00:00
permalink: /pages/4ff1abc5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "atmosphere"
  - "climate"
  - "copernicus"
  - "ecmwf"
  - "forecast"
  - "particulate-matter"
---

# 哥白尼大气监测服务（CAMS）全球近实时数据

英文原名：Copernicus Atmosphere Monitoring Service (CAMS) Global Near-Real-Time

## 这是什么数据

哥白尼大气监测服务提供在全球与区域尺度上持续监测地球大气成分的能力。其主要的全球近实时生产系统是一套数据同化与预报系统，每天提供两次 5 天预报，涵盖气溶胶与化学方案中的化学成分。

2021-07-01 之前只有两个参数可用：1. 地面 550 nm 总气溶胶光学厚度；2. 地面粒径小于 25 微米的颗粒物。注意 system:time_start 指的是预报时间。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2016-06-22 至 2026-11-07
- 更新节奏：每天两次 5 天预报

## 分辨率与规格

- 空间分辨率：约 44,528 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| total_aerosol_optical_depth_at_550nm_surface | 地面 550 nm 总气溶胶光学厚度 | 44528 |  |
| particulate_matter_d_less_than_25_um_surface | 颗粒物，粒径 < 2.5 微米 | 44528 |  |
| total_column_nitrogen_dioxide_surface | 地面二氧化氮总柱量 | 44528 |  |
| total_column_sulphur_dioxide_surface | 地面二氧化硫总柱量 | 44528 |  |
| total_column_carbon_monoxide_surface | 地面一氧化碳总柱量 | 44528 |  |
| total_column_formaldehyde_surface | 地面甲醛总柱量 | 44528 |  |
| gems_total_column_ozone_surface | GEMS 臭氧总柱量 | 44528 |  |
| sea_salt_aerosol_optical_depth_at_550nm_surface | 地面 550 nm 海盐气溶胶光学厚度 | 44528 |  |
| dust_aerosol_optical_depth_at_550nm_surface | 地面 550 nm 沙尘气溶胶光学厚度 | 44528 |  |
| organic_matter_aerosol_optical_depth_at_550nm_surface | 地面 550 nm 有机质气溶胶光学厚度 | 44528 |  |
| black_carbon_aerosol_optical_depth_at_550nm_surface | 地面 550 nm 黑碳气溶胶光学厚度 | 44528 |  |
| sulphate_aerosol_optical_depth_at_550nm_surface | 地面 550 nm 硫酸盐气溶胶光学厚度 | 44528 |  |
| total_aerosol_optical_depth_at_469nm_surface | 地面 469 nm 总气溶胶光学厚度 | 44528 |  |
| total_aerosol_optical_depth_at_670nm_surface | 地面 670 nm 总气溶胶光学厚度 | 44528 |  |
| total_aerosol_optical_depth_at_865nm_surface | 地面 865 nm 总气溶胶光学厚度 | 44528 |  |
| total_aerosol_optical_depth_at_1240nm_surface | 地面 1240 nm 总气溶胶光学厚度 | 44528 |  |
| var98-0-210-250_surface | 550 nm 硝酸盐气溶胶光学厚度 | 44528 |  |
| var98-0-210-251_surface | 550 nm 铵盐气溶胶光学厚度 | 44528 |  |
| particulate_matter_d_less_than_1_um_surface | 地面颗粒物，粒径 < 1 微米 | 44528 |  |
| particulate_matter_d_less_than_10_um_surface | 地面颗粒物，粒径 < 10 微米 | 44528 |  |
| uv_biologically_effective_dose_surface | 地面紫外线生物有效剂量 | 44528 |  |
| total_column__peroxyacetyl_nitrate_surface | 地面过氧乙酰硝酸酯总柱量 | 44528 |  |
| total_column__isoprene_surface | 地面异戊二烯总柱量 | 44528 |  |
| total_column_nitrogen_monoxide_surface | 地面一氧化氮总柱量 | 44528 |  |
| total_column_hydrogen_peroxide_surface | 地面过氧化氢总柱量 | 44528 |  |
| total_column_hydroxyl_radical_surface | 地面羟基自由基总柱量 | 44528 |  |
| total_column_methane_surface | 地面甲烷总柱量 | 44528 |  |
| total_column__ethane_surface | 地面乙烷总柱量 | 44528 |  |
| total_column_propane_surface | 地面丙烷总柱量 | 44528 |  |
| total_column_nitric_acid_surface | 地面硝酸总柱量 | 44528 |  |

## 能拿来做什么

- 全球大气成分与空气质量近实时监测
- 气溶胶（沙尘、海盐、黑碳等）预报分析
- 污染气体柱浓度（NO₂、SO₂、CO、甲醛、臭氧）跟踪

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ECMWF/CAMS/NRT');
```

- 数据集编号（Earth Engine ID）：`ECMWF/CAMS/NRT`
- 提供方：European Centre for Medium-Range Weather Forecasts (ECMWF)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ECMWF_CAMS_NRT

## 许可与引用

- 许可：proprietary
- 关键词：aerosol, atmosphere, climate, copernicus, ecmwf, forecast, particulate-matter
- 数据引用：Benedetti, A., and Coauthors, 2009: Aerosol analysis and forecast in the
ECMWF Integrated Forecast System. Part II : Data assimilation,
J. Geophys. Res., 114, D13205
[doi:10.1029/2008JD011115](https://doi.org/10.1029/2008JD011115).

- DOI：10.1029/2008JD011115

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [哨兵-5P 离线一氧化碳（L3）](/pages/0bd864c8/)
- [哨兵-5P 离线二氧化氮（L3）](/pages/7fe826cd/)
- [哨兵-5P 离线二氧化硫（L3）](/pages/eff44f62/)
- [哨兵-5P 离线云属性（L3）](/pages/f29bba93/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
