---
title: "气候危害中心（CHC）耦合模式比较计划第六阶段（CHC-CMIP6）"
date: 2026-11-03 12:00:00
permalink: /pages/835f6143/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "geophysical"
  - "precipitation"
  - "ucsb"
  - "weather"
---

# 气候危害中心（CHC）耦合模式比较计划第六阶段（CHC-CMIP6）

英文原名：The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6)

## 这是什么数据

CHC-CMIP6 是专门为支持分析近期过去与近未来的气候相关危害而开发的。

此气候预估数据集包含观测（1983–2016）与预估（2030 与 2050）时段的全球逐日格网数据，用于识别与监测水文气候极端。数据集包含气候危害带站点的红外温度（CHIRTS-daily）温度产品、气候危害带站点的红外降水（CHIRPS）降水产品的高分辨率（0.05°）全球逐日格网，以及 ERA5 派生的相对湿度，并由此派生水汽压差（VPD）与最高湿球黑球温度（WBGTmax）。

共享社会经济路径（SSP）245 与 SSP 585 情景的大型 CMIP6 集合被用于开发高分辨率（0.05°）逐日 2030 与 2050 增量场。

更多信息见 [气候危害中心（CHC）耦合模式比较计划第六阶段（CHC-CMIP6）](https://chc.ucsb.edu/data/chc-cmip6)。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：1983 年至 2016 年观测期与 2030、2050 年预估（逐日）；分辨率：5,566 米（0.05 度）。
- 时间范围：1983-01-01 至 2016-12-31

## 分辨率与规格

- 空间分辨率：约 5,566 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CHIRPS | 逐日总降水。 | 5566 |  |
| himax | 逐日最大炎热指数。 | 5566 |  |
| RH | 相对湿度。 | 5566 |  |
| RHx | 最高温度时刻的相对湿度 | 5566 |  |
| RHn | 最低温度时刻的相对湿度。 | 5566 |  |
| wbgtmax | 逐日最大湿球黑球温度。 | 5566 |  |
| vpd | 逐日水汽压差。 | 5566 |  |
| svp | 逐日平均饱和水汽压。 | 5566 |  |
| Tmax | 逐日最高近地表气温。 | 5566 |  |
| Tmin | 逐日最低近地表气温。 | 5566 |  |

## 能拿来做什么

- 评估未来气候情景下的热与降水极端风险。
- 为适应规划提供高分辨率气候预估。
- 分析湿球温度等健康相关危害指标。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('UCSB/CHC/CMIP6/v1');
```

- 数据集编号（Earth Engine ID）：`UCSB/CHC/CMIP6/v1`
- 提供方：UCSB、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UCSB_CHC_CMIP6_v1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：climate, geophysical, precipitation, ucsb, weather
- 数据引用：Williams, E., Funk, C., Peterson, P., & Tuholske, C. (2024). High resolution
climate change observations and projections for the evaluation of
heat-related extremes. Scientific Data, 11(1), 261.
[https://www.nature.com/articles/s41597-024-03074-w](https://www.nature.com/articles/s41597-024-03074-w)
2015.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
