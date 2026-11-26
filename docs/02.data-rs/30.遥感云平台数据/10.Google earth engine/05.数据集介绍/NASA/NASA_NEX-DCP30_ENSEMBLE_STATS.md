---
title: "NEX-DCP30：NASA 地球交换降尺度气候预估的集合统计"
date: 2026-11-03 12:00:00
permalink: /pages/866319af/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cag"
  - "climate"
  - "cmip5"
  - "geophysical"
  - "ipcc"
  - "nasa"
  - "nex"
  - "precipitation"
  - "temperature"
  - "weather-and-climate"
---

# NEX-DCP30：NASA 地球交换降尺度气候预估的集合统计

英文原名：NEX-DCP30: Ensemble Stats for NASA Earth Exchange Downscaled Climate Projections

## 这是什么数据

NASA NEX-DCP30 数据集由美国本土的降尺度气候情景组成，源自耦合模式比较计划第 5 阶段（CMIP5，见 [Taylor 等 2012](https://journals.ametsoc.org/doi/abs/10.1175/BAMS-D-11-00094.1)）下进行的全球环流模式（GCM）运行，以及为政府间气候变化专门委员会第五次评估报告（IPCC AR5）开发的四个温室气体排放情景（称为代表性浓度路径（RCP），见 [Meinshausen 等 2011](https://rd.springer.com/article/10.1007%2Fs10584-011-0156-z#page-1)）。这些数据集的目的是提供一组高分辨率、偏差校正的气候变化预估，可用于评估气候变化对对更精细尺度气候梯度敏感的过程的影响，以及局地地形对气候条件的影响。

数据集包含覆盖 1950 至 2005 年（回顾运行）与 2006 至 2099 年（前瞻运行）时段的月度预估。它包括为每个 RCP 从 pr、tasmin 与 tasmax 波段的全部可用模式运行计算的集合统计。

NEX-DCP30 由气候分析组与 NASA 艾姆斯研究中心使用 NASA 地球交换平台制备，由 NASA 气候模拟中心（NCCS）分发。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：美国本土（CONUS）；时间范围：1950 年至 2099 年；分辨率：927.67 米。
- 时间范围：1950-01-01 至 2099-12-01

## 分辨率与规格

- 空间分辨率：约 927.67 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| pr_mean | 地表日降水率的月平均；包括来自所有类型云（大尺度与对流）的液态与固态相。 | 927.67 |  |
| pr_quartile25 | 地表降水的第 25 四分位数；包括来自所有类型云（大尺度与对流）的液态与固态相。 | 927.67 |  |
| pr_median | 地表降水的中位数；包括来自所有类型云（大尺度与对流）的液态与固态相。 | 927.67 |  |
| pr_quartile75 | 地表降水的第 75 四分位数；包括来自所有类型云（大尺度与对流）的液态与固态相。 | 927.67 |  |
| tasmin_mean | 日最低近地表气温的月平均。 | 927.67 |  |
| tasmin_quartile25 | 日最低近地表气温的第 25 四分位数。 | 927.67 |  |
| tasmin_median | 日最低近地表气温的中位数。 | 927.67 |  |
| tasmin_quartile75 | 日最低近地表气温的第 75 四分位数。 | 927.67 |  |
| tasmax_mean | 日最高近地表气温的月平均。 | 927.67 |  |
| tasmax_quartile25 | 日最高近地表气温的第 25 四分位数。 | 927.67 |  |
| tasmax_median | 日最高近地表气温的中位数。 | 927.67 |  |
| tasmax_quartile75 | 日最高近地表气温的第 75 四分位数。 | 927.67 |  |

## 能拿来做什么

- 气候变化影响评估
- 降尺度气候预估
- 区域气候研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/NEX-DCP30_ENSEMBLE_STATS');
```

- 数据集编号（Earth Engine ID）：`NASA/NEX-DCP30_ENSEMBLE_STATS`
- 提供方：NASA / Climate Analytics Group、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-DCP30_ENSEMBLE_STATS

## 许可与引用

- 许可：proprietary
- 关键词：cag, climate, cmip5, geophysical, ipcc, nasa, nex, precipitation, temperature, weather-and-climate
- 数据引用：Thrasher, B., J. Xiong, W. Wang, F. Melton, A. Michaelis and R. Nemani
(2013), Downscaled Climate Projections Suitable for Resource Management,
Eos Trans. AGU, 94(37), 321.
[doi:10.1002/2013EO370002](https://doi.org/10.1002/2013EO370002)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)
- [GCOM-C/SGLI 三级地表温度产品（V1）](/pages/a4b5eab0/)
- [GCOM-C/SGLI 三级地表温度产品（V2）](/pages/92e78526/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
