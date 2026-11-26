---
title: "MACAv2-METDATA 月度汇总：爱达荷大学，应用于全球气候模型的多变量自适应构造类比"
date: 2026-11-03 12:00:00
permalink: /pages/f81aa130/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "conus"
  - "geophysical"
  - "idaho"
  - "maca"
  - "monthly"
  - "weather-and-climate"
---

# MACAv2-METDATA 月度汇总：爱达荷大学，应用于全球气候模型的多变量自适应构造类比

英文原名：MACAv2-METDATA Monthly Summaries: University of Idaho, Multivariate Adaptive Constructed Analogs Applied to Global  Climate Models

## 这是什么数据

MACAv2-METDATA 数据集是覆盖美国本土的 20 个全球气候模型的集合。多变量自适应构造类比（MACA）方法是一种统计降尺度方法，它利用训练数据集（即气象观测数据集）来消除历史偏差并匹配气候模型输出的空间模式。

MACA 方法被用于将耦合模型比较计划第 5 阶段（CMIP5）的 20 个全球气候模型（GCM）的模型输出降尺度，从 GCM 的原生分辨率降到 4 公里，涵盖历史 GCM 强迫（1950–2005 年）和未来代表性浓度路径（RCP）RCP 4.5 和 RCP 8.5 情景（2006–2100 年）。

该版本包含月度汇总。

模型的完整列表见：[https://climate.northwestknowledge.net/MACA/GCMs.php](https://climate.northwestknowledge.net/MACA/GCMs.php)

## 覆盖范围与时间

- 覆盖范围：美国本土
- 时间范围：1900-01-01 至 2099-12-31

## 分辨率与规格

- 空间分辨率：约 4,638.3 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tasmax | 近地表逐日最高温度的月平均 | 4638.3 |  |
| tasmin | 近地表逐日最低温度的月平均 | 4638.3 |  |
| huss | 近地表逐日平均比湿的月平均 | 4638.3 |  |
| pr | 地表月总降水量 | 4638.3 |  |
| rsds | 地表逐日平均向下短波辐射的月平均 | 4638.3 |  |
| was | 近地表逐日平均风速的月平均 | 4638.3 |  |

## 能拿来做什么

- 气候变化降尺度预估
- 火灾与生态影响评估
- 水资源规划

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('IDAHO_EPSCOR/MACAv2_METDATA_MONTHLY');
```

- 数据集编号（Earth Engine ID）：`IDAHO_EPSCOR/MACAv2_METDATA_MONTHLY`
- 提供方：University of California Merced、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_MACAv2_METDATA_MONTHLY

## 许可与引用

- 许可：CC0-1.0
- 关键词：climate, conus, geophysical, idaho, maca, monthly, weather-and-climate
- 数据引用：Abatzoglou J.T. and Brown T.J., A comparison of statistical downscaling
methods suited for wildfire applications, International Journal
of Climatology(2012) [doi:10.1002/joc.2312](https://doi.org/10.1002/joc.2312).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)
- [CHELSA气象数据](/pages/1849d6/)
- [CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)](/pages/09ea3f30/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
