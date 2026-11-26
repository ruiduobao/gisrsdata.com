---
title: "MethaneAIR L4 点源 v1"
date: 2026-11-03 12:00:00
permalink: /pages/32e81487/
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

# MethaneAIR L4 点源 v1

英文原名：MethaneAIR L4 Point Sources v1

## 这是什么数据

本数据集提供高排放甲烷点源检测数据（千克/小时），覆盖 13 个油气或煤炭开采区——从西部的科罗拉多、新墨西哥与得克萨斯，到东部的宾夕法尼亚、俄亥俄与西弗吉尼亚——外加三个城市区域（纽约市、凤凰城与盐湖城）。

甲烷是一种强效温室气体，进入大气后的前 20 年里，其增温效力是二氧化碳的 80 多倍。当今全球变暖至少有 30% 由人类活动产生的甲烷驱动。削减与人类活动相关的甲烷排放——包括油气作业、农业与废弃物管理中可避免的排放——是减缓全球变暖速率最快的单一途径。

面源排放使用地统计反演模型框架、由观测的 XCH4 估计（见[「MethaneAIR L4 Area Sources」](EDF_MethaneSAT_MethaneAIR_L4area) 数据集）。一个大气传输模式——随机时间反演拉格朗日传输模式「STILT」，[Lin 等（2003）](https://doi.org/10.1029/2002JD003161)、[Fasoli 等（2018）](https://doi.org/10.5194/gmd-11-2813-2018)——由 NOAA 高分辨率快速更新模式「HRRR」的气象数据驱动，用于将观测 XCH4 的变化与潜在的上风向源联系起来。采用分层方法，将 XCH4 变化中由面源排放引起的部分，与由点源排放或跨区域边界流入（「背景」浓度）引起的部分分开。点源排放逐个确定（见[「MethaneAIR L4 Point Sources」](EDF_MethaneSAT_MethaneAIR_L4point) 数据集），并从观测 XCH4 中预先扣除。然后用一个反演模型估计跨边界区域的 XCH4 流入。最后，使用强制非负解的地统计反演模型估计面源排放。总排放是面源与点源排放之和。

本数据集由 2021 年 7 月 30 日至 2023 年 10 月 13 日期间飞行中获取的 MethaneAIR 测量 生成。MethaneAIR 是 MethaneSAT 卫星任务的机载先行者，由 [MethaneSAT LLC](https://www.methanesat.org/) 管理，该公司是环境保护基金（EDF）的全资子公司。甲烷排放通量使用点源检测与排放量化框架制作，该框架专门利用 MethaneAIR 数据的高空间分辨率、宽空间覆盖与高精度（方法见 [Chulakdabba 等（2023）](https://doi.org/10.5194/amt-16-5771-2023)）。点源量化框架已在盲法受控释放实验中得到充分检验，详见 [Chulakdabba 等（2023）](https://doi.org/10.5194/amt-16-5771-2023) 与 [Abbadi 等（2024）](https://doi.org/10.1021/acs.est.4c02439)。并非所有数据产品在所有飞行中都可用。

有关 MethaneAIR 仪器、仪器定标与排放检测的更多信息，请参阅 [Loughner 等（2021）](https://doi.org/10.1175/JAMC-D-20-0158.1)、[Staebell 等（2021）](https://doi.org/10.5194/amt-14-3737-2021)、[Conway 等（2023）](https://doi.org/10.5194/amt-2023-111)、[Chulakadabba 等（2023）](https://doi.org/10.5194/egusphere-2023-822)、[Abbadi 等（2023）](https://doi.org/10.31223/X51D4C)、[Omara 等（2023）](https://doi.org/10.5194/essd-15-3761-2023) 与 [Miller 等（2023）](https://doi.org/10.5194/egusphere-2023-1962) 的近期出版物。

如需了解该项目的更多信息，请通过此链接联系数据提供方：[https://www.methanesat.org/contact/](https://www.methanesat.org/contact/)

## 覆盖范围与时间

- 覆盖范围：美国 13 个油气/煤炭开采区与 3 个城市区域
- 时间范围：2021-07-30 至 2023-10-13

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| plume_id | INT | 羽流编号（每次飞行内唯一） |
| flux | INT | 甲烷通量量化值 |
| flux_hi | INT | 甲烷通量量化值的较高估计，单位千克/小时 |
| flux_lo | INT | 甲烷通量量化值的较低估计，单位千克/小时 |
| flux_sd | INT | 甲烷通量量化值的标准差，单位千克/小时 |
| in_gim_bound | INT | 点源是否位于 L4 GIM 面源排放产品的足迹范围内（否为 0、是为 1） |
| flight_id | STRING | 研究飞行标识符 |
| basin | STRING | 油气盆地（如 Permian）或关注区域（如纽约市） |
| time_coverage_start | STRING | 数据采集开始时间，格式为 YYYY-MM-DDThh:mm:ssZ 字符串（ISO 8601） |
| time_coverage_end | STRING | 数据采集结束时间，格式为 YYYY-MM-DDThh:mm:ssZ 字符串（ISO 8601） |
| processing_id | STRING | （内部）处理运行标识符，表示产生这些要素的计算过程。它是处理管线的属性，而不是描述飞行的属性 |

## 能拿来做什么

- 甲烷超级排放点源定位
- 油气设施泄漏排查与减排核查
- 城市甲烷排放热点识别

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('EDF/MethaneSAT/MethaneAIR/L4point');
```

- 数据集编号（Earth Engine ID）：`EDF/MethaneSAT/MethaneAIR/L4point`
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EDF_MethaneSAT_MethaneAIR_L4point

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, climate, edf, emissions, ghg, methane, methaneair, methanesat, table
- 数据引用：Chulakadabba, A., Sargent, M., Lauvaux, T., Benmergui, J. S., Franklin, J.
E., Chan Miller, C., Wilzewski, J. S., Roche, S., Conway, E., Souri, A. H.,
Sun, K., Luo, B., Hawthrone, J., Samra, J., Daube, B. C., Liu, X., Chance,
K., Li, Y., Gautam, R., Omara, M., Rutherford, J. S., Sherwin, E. D.,
Brandt, A., and Wofsy, S. C. 2023. Methane point source quantification using
MethaneAIR: a new airborne imaging spectrometer, Atmos. Meas. Tech., 16,
5771-5785.
[doi:10.5194/amt-16-5771-2023](https://doi.org/10.5194/amt-16-5771-2023),


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MethaneAIR L3 Concentration v1](/pages/7172790c/)
- [MethaneAIR L4 Area Sources v1](/pages/b2ba5320/)
- [MethaneAIR L4 Area Sources 2021 [deprecated]](/pages/9a672fd8/)
- [MethaneAIR L4 Point Sources 2021 [deprecated]](/pages/aafea29a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
