---
title: "PRISM 逐月空间数据集 AN81m [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/b865a04a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "geophysical"
  - "monthly"
  - "oregonstate"
  - "precipitation"
  - "pressure"
  - "prism"
  - "temperature"
  - "vapor"
  - "weather"
  - "weather-and-climate"
---

# PRISM 逐月空间数据集 AN81m [已弃用]

英文原名：PRISM Monthly Spatial Dataset AN81m [deprecated]

## 这是什么数据

PRISM 逐日与逐月数据集是美国本土的格网天气数据集，由俄勒冈州立大学 PRISM 小组生产。

格网用 PRISM（独立坡面参数-高程回归模型）生成。PRISM 插值程序模拟天气如何随高程变化，并考虑海岸效应、逆温与可能造成雨影的地形屏障。站点数据同化自全国众多网络。更多信息见 [PRISM 空间数据集说明](https://www.prism.oregonstate.edu/documents/PRISM_datasets.pdf)。

**注**

* **警告**：由于站点设备与位置变更、站点开闭、观测时间不一以及相对短期网络的使用等非天气因素变异，本数据集不应用于计算百年尺度趋势。详情见 [数据集文档](https://www.prism.oregonstate.edu/documents/PRISM_datasets.pdf)。* 资产的开始时间为 UTC 正午，而非 UTC 午夜。* 观测网络进行质量控制与发布站点数据需要时间。因此，PRISM 数据集会多次重新建模，直到六个月后视为定版。[发布时间表](https://www.prism.oregonstate.edu/calendar/) 可查。

## 覆盖范围与时间

- 覆盖范围：空间：美国本土；时间：1895 年至 2020 年（逐月）；分辨率：4,638.3 米。
- 时间范围：1895-01-01 至 2020-12-01

## 分辨率与规格

- 空间分辨率：约 4,638.3 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ppt | 逐月总降水量（包括降雨与融雪） | 4638.3 |  |
| tmean | 逐日平均温度的月平均（按 (tmin+tmax)/2 计算） | 4638.3 |  |
| tmin | 月最低温度 | 4638.3 |  |
| tmax | 逐日最高温度的月平均 | 4638.3 |  |
| tdmean | 逐日平均露点温度的月平均 | 4638.3 |  |
| vpdmin | 逐日最小水汽压差的月平均 | 4638.3 |  |
| vpdmax | 逐日最大水汽压差的月平均 | 4638.3 |  |

## 能拿来做什么

- 做美国本土高分辨率气候分析与农业气象应用。
- 为水文与生态模型提供降水、温度强迫场。
- 分析极端天气事件的空间分布。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OREGONSTATE/PRISM/AN81m');
```

- 数据集编号（Earth Engine ID）：`OREGONSTATE/PRISM/AN81m`
- 提供方：PRISM / OREGONSTATE、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OREGONSTATE_PRISM_AN81m

## 许可与引用

- 许可：proprietary
- 关键词：geophysical, monthly, oregonstate, precipitation, pressure, prism, temperature, vapor, weather, weather-and-climate
- 数据引用：[Daly, C., Halbleib, M., Smith, J.I., Gibson, W.P., Doggett, M.K.,
Taylor, G.H., Curtis, J., and Pasteris, P.A. 2008. Physiographically-sensitive
mapping of temperature and precipitation across the conterminous
United States. International Journal of Climatology, 28: 2031-2064](https://www.prism.oregonstate.edu/documents/pubs/2008intjclim_physiographicMapping_daly.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [PRISM 逐日空间数据集 ANd](/pages/fe60f87e/)
- [PRISM 逐月空间数据集 ANm](/pages/903cb06d/)
- [PRISM 逐日空间数据集 AN81d [已弃用]](/pages/fd3b947f/)
- [PRISM 长期气候态数据集 Norm81m [已弃用]](/pages/35c47a2e/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
