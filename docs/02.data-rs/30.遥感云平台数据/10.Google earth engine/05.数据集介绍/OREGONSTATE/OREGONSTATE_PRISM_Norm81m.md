---
title: "PRISM 长期气候态数据集 Norm81m [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/35c47a2e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "30-year"
  - "geophysical"
  - "oregonstate"
  - "precipitation"
  - "pressure"
  - "prism"
  - "temperature"
  - "vapor"
  - "weather"
  - "weather-and-climate"
---

# PRISM 长期气候态数据集 Norm81m [已弃用]

英文原名：PRISM Long-Term Normals Dataset Norm81m [deprecated]

## 这是什么数据

PRISM 逐日与逐月数据集是美国本土的格网天气数据集，由俄勒冈州立大学 PRISM 小组生产。

格网用 PRISM（独立坡面参数-高程回归模型）生成。PRISM 插值程序模拟天气如何随高程变化，并考虑海岸效应、逆温与可能造成雨影的地形屏障。站点数据同化自全国众多网络。更多信息见 [PRISM 空间数据集说明](https://www.prism.oregonstate.edu/documents/PRISM_datasets.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：美国本土；时间：1981 年至 2010 年（30 年气候态，逐月）；分辨率：4,638.3 米。
- 时间范围：1981-01-01 至 2010-12-31

## 分辨率与规格

- 空间分辨率：约 4,638.3 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ppt | 月总降水量（包括降雨与融雪）的 30 年平均 | 4638.3 |  |
| tmean | 月平均温度（按 (tmin+tmax)/2 计算）的 30 年平均 | 4638.3 |  |
| tmin | 月最低温度的 30 年平均 | 4638.3 |  |
| tmax | 月最高温度的 30 年平均 | 4638.3 |  |
| tdmean | 月平均露点温度的 30 年平均 | 4638.3 |  |
| vpdmin | 月最小水汽压差的 30 年平均 | 4638.3 |  |
| vpdmax | 月最大水汽压差的 30 年平均 | 4638.3 |  |

## 能拿来做什么

- 做美国本土高分辨率气候分析与农业气象应用。
- 为水文与生态模型提供降水、温度强迫场。
- 分析极端天气事件的空间分布。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OREGONSTATE/PRISM/Norm81m');
```

- 数据集编号（Earth Engine ID）：`OREGONSTATE/PRISM/Norm81m`
- 提供方：PRISM / OREGONSTATE、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OREGONSTATE_PRISM_Norm81m

## 许可与引用

- 许可：proprietary
- 关键词：30-year, geophysical, oregonstate, precipitation, pressure, prism, temperature, vapor, weather, weather-and-climate
- 数据引用：Daly, C., Halbleib, M., Smith, J.I., Gibson, W.P., Doggett, M.K.,
Taylor, G.H., Curtis, J., and Pasteris, P.A. 2008. Physiographically-sensitive
mapping of temperature and precipitation across the conterminous
United States. International Journal of Climatology, 28: 2031-2064
[doi:10.1002/joc.1688](https://doi.org/10.1002/joc.1688)
[pdf](https://www.prism.oregonstate.edu/documents/pubs/2008intjclim_physiographicMapping_daly.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [PRISM 逐日空间数据集 ANd](/pages/fe60f87e/)
- [PRISM 逐月空间数据集 ANm](/pages/903cb06d/)
- [PRISM 逐日空间数据集 AN81d [已弃用]](/pages/fd3b947f/)
- [PRISM 逐月空间数据集 AN81m [已弃用]](/pages/b865a04a/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
