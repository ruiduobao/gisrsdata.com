---
title: "NEX-GDDP-CMIP6：NASA 地球交换全球每日降尺度气候预估"
date: 2026-11-03 12:00:00
permalink: /pages/85afcbe3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cag"
  - "climate"
  - "gddp"
  - "geophysical"
  - "ipcc"
  - "nasa"
  - "nex"
  - "precipitation"
  - "temperature"
  - "weather-and-climate"
---

# NEX-GDDP-CMIP6：NASA 地球交换全球每日降尺度气候预估

英文原名：NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections

## 这是什么数据

NEX-GDDP-CMIP6 数据集由源自耦合模式比较计划第 6 阶段（CMIP6，见 [Thrasher 等 2022](https://doi.org/10.7917/OFSG3345)）下进行的全球环流模式（GCM）运行的全球降尺度气候情景，以及四个「一级」温室气体排放情景中两个被称为共享社会经济路径（SSP）的情景组成。

CMIP6 GCM 运行是为支持政府间气候变化专门委员会第六次评估报告（IPCC AR6）而开发的。本数据集包括来自 ScenarioMIP 模式运行的降尺度预估，这些运行的日情景已生产并通过地球系统网格联邦分发。

本集合包含 34 个不同的模式。一个模式「GFDL-CM4」有两种不同配置的数据，可通过对 *grid_label* 属性进一步过滤来区分。

波段随新版本可用而被替换，*version* 属性随之更新。

另见[提供方技术说明](https://www.nccs.nasa.gov/wp-content/uploads/2024/03/NEX-GDDP-CMIP6-Tech_Note_4.pdf)。

[你可以向提供方提交有关 CMIP6 的数据问题](https://airtable.com/shr01weJfA7DYq6jf)，并[查看他们的答复](https://airtable.com/shrX4mj20TLSH0r2y/tblUMAYpCfCCwucSV)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1950 年至 2100 年；分辨率：27,830 米。
- 时间范围：1950-01-01 至 2100-12-31

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| hurs | 近地表相对湿度。以下模型中不存在：'BCC-CSM2-MR'、'NESM3'、'KIOST-ESM'（仅 'ssp245' 情景 2058 年）。 | 27830 |  |
| huss | 近地表比湿。以下模型中不存在：'IPSL-CM6A-LR'、'MIROC6'、'NESM3'。 | 27830 |  |
| pr | 降水（日降水率的平均）。 | 27830 |  |
| rlds | 地表下行长波辐射。 | 27830 |  |
| rsds | 地表下行短波辐射。 | 27830 |  |
| sfcWind | 日平均近地表风速。 | 27830 |  |
| tas | 日近地表气温。以下模型中不存在：'NorESM2-LM'（仅 'ssp585' 情景 2096 年）。 | 27830 |  |
| tasmin | 日最低近地表气温。以下模型中不存在：'CESM2'、'CESM2-WACCM'、'IITM-ESM'、'TaiESM1'（仅 'ssp585' 情景 2093 年）。 | 27830 |  |
| tasmax | 日最高近地表气温。以下模型中不存在：'CESM2'、'CESM2-WACCM'、'IITM-ESM'。 | 27830 |  |

## 能拿来做什么

- 气候变化预估与影响评估
- 降尺度气候情景分析
- 适应规划

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GDDP-CMIP6');
```

- 数据集编号（Earth Engine ID）：`NASA/GDDP-CMIP6`
- 提供方：NASA / Climate Analytics Group、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GDDP-CMIP6

## 许可与引用

- 许可：CC0-1.0
- 关键词：cag, climate, gddp, geophysical, ipcc, nasa, nex, precipitation, temperature, weather-and-climate
- 数据引用：Thrasher, B., Maurer, E. P., McKellar, C., & Duffy, P. B., 2012:
Technical Note: Bias correcting climate model simulated daily temperature
extremes with quantile mapping. Hydrology and Earth System Sciences,
16(9), 3309-3314.
[doi:10.5194/hess-16-3309-2012](https://doi.org/10.5194/hess-16-3309-2012)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)
- [GCOM-C/SGLI 三级地表温度产品（V1）](/pages/a4b5eab0/)
- [GCOM-C/SGLI 三级地表温度产品（V2）](/pages/92e78526/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
