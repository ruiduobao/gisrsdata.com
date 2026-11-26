---
title: "MethaneAIR L4 点源 2021（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/aafea29a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "edf"
  - "emissions"
  - "ghg"
  - "methane"
  - "methaneair"
  - "methanesat"
  - "table"
---

# MethaneAIR L4 点源 2021（已弃用）

英文原名：MethaneAIR L4 Point Sources 2021 [deprecated]

## 这是什么数据

本数据集提供高排放甲烷点源检测数据（千克/小时），覆盖新墨西哥州南部与得克萨斯州西部的 Permian Delaware 子盆地，以及犹他州的 Uinta 盆地。

甲烷是一种强效温室气体，进入大气后的前 20 年里，其增温效力是二氧化碳的 80 多倍。当今全球变暖至少有 30% 由人类活动产生的甲烷驱动。削减与人类活动相关的甲烷排放——包括油气作业、农业与废弃物管理中可避免的排放——是减缓全球变暖速率最快的单一途径。

本数据集由 MethaneAIR 在 2021 年 8 月 8 日 Permian 上空（研究飞行 RF06）与 2021 年 8 月 11 日 Uinta 上空（RF08）的测量生成。MethaneAIR 是 MethaneSAT 卫星任务的机载先行者，由 [MethaneSAT LLC](https://www.methanesat.org/) 管理，该公司是环境保护基金（EDF）的全资子公司。

有关 MethaneAIR 仪器、仪器定标与排放检测的更多信息，请参阅 [Staebell 等（2021）](https://doi.org/10.5194/amt-14-3737-2021)、[Conway 等（2023）](https://doi.org/10.5194/amt-2023-111)、[Chulakadabba 等（2023）](https://doi.org/10.5194/egusphere-2023-822)、[Abbadi 等（2023）](https://doi.org/10.31223/X51D4C)、[Omara 等（2023）](https://doi.org/10.5194/essd-15-3761-2023) 与 [Miller 等（2023）](https://doi.org/10.5194/egusphere-2023-1962) 的近期出版物。

如需了解该项目的更多信息，请通过此链接联系数据提供方：[https://www.methanesat.org/contact/](https://www.methanesat.org/contact/)

## 覆盖范围与时间

- 覆盖范围：美国 Permian Delaware 子盆地与 Uinta 盆地
- 时间范围：2021-08-07 至 2021-08-11

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| Flux_kg_hr | INT | 甲烷通量量化值，单位千克/小时 |
| flt | STRING | 飞行标识符 |
| plume_numb | INT | 羽流编号 |
| sd | INT | 甲烷通量量化值的标准差，单位千克/小时 |

## 能拿来做什么

- Permian 与 Uinta 盆地甲烷点源定位
- 早期MethaneAIR 飞行的点源结果查阅

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('EDF/MethaneSAT/MethaneAIR/methaneair-L4point-2021');
```

- 数据集编号（Earth Engine ID）：`EDF/MethaneSAT/MethaneAIR/methaneair-L4point-2021`
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EDF_MethaneSAT_MethaneAIR_methaneair-L4point-2021

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, climate, edf, emissions, ghg, methane, methaneair, methanesat, table
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MethaneAIR L3 Concentration v1](/pages/7172790c/)
- [MethaneAIR L4 Area Sources v1](/pages/b2ba5320/)
- [MethaneAIR L4 Point Sources v1](/pages/32e81487/)
- [MethaneAIR L4 Area Sources 2021 [deprecated]](/pages/9a672fd8/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
