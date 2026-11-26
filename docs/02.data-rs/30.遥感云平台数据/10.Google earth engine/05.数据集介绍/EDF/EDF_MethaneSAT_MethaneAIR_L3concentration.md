---
title: "MethaneAIR L3 甲烷浓度 v1"
date: 2026-11-03 12:00:00
permalink: /pages/7172790c/
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
---

# MethaneAIR L3 甲烷浓度 v1

英文原名：MethaneAIR L3 Concentration v1

## 这是什么数据

本数据集提供 MethaneAIR 成像光谱仪观测的大气甲烷总柱干空气摩尔分数「XCH4」的地理空间数据。XCH4 定义为：沿机载光谱仪到地球表面再返回太阳的视线路径上，甲烷的总柱量（分子数）除以空气总量（分子数，扣除水汽量）。另提供参考数据层：1622 nm 处的观测反照率、地表气压与地形高度。

甲烷是一种强效温室气体，进入大气后的前 20 年里，其增温效力是二氧化碳的 80 多倍。当今全球变暖至少有 30% 由人类活动产生的甲烷驱动。削减与人类活动相关的甲烷排放——包括油气作业、农业与废弃物管理中可避免的排放——是减缓全球变暖速率最快的单一途径。

飞机在 11.5–13 公里高空（37,000–43,000 英尺）飞行，以每秒 10 帧的速度采集，幅宽 4.5–4.8 公里，视场角 25 度、跨轨 896 个像元，星下点原生像元大小约为沿轨 25 米、跨轨 5 米。光谱数据沿跨轨方向 5 个像元聚合，得到 25 米 × 25 米的平均像元大小。浓度（XCH4）由这些高分辨率（0.1 nm 采样、0.3 nm 分辨率）的空间分布光谱反演（[Chan Miller 等（2024）](https://doi.org/10.5194/egusphere-2023-1962)），然后格网化到 0.0001 × 0.0001 度格网（在美国上空约为 10 米 × 8 米）。格网化数据的精度约为十亿分之 25（1σ，约 1.3%），空间相关长度（1/e）约 70 米。不同飞行之间会因作业条件、观测角度与地表反照率而有所差异。

飞行模式通常是一系列椭圆形条带、以 Zamboni（洗冰车）式图案覆盖一个区域，通常约为 70 公里 × 100 公里，历时 2–3 小时。此处呈现的数据在飞行轨迹重叠处做了平均，通常位于每条条带的边缘以及 Zamboni 图案顶部与底部的转弯处。

本数据集由 2021 年 7 月 30 日至 2023 年 10 月 13 日期间飞行中获取的 MethaneAIR 测量 生成。MethaneAIR 是 MethaneSAT 卫星任务的机载先行者，由 [MethaneSAT LLC](https://www.methanesat.org/) 管理，该公司是环境保护基金（EDF）的全资子公司。甲烷排放通量在这些 Zamboni 条带上使用地统计反演建模框架制作。

有关 MethaneAIR 仪器、仪器定标与排放检测的更多信息，请参阅 [Loughner 等（2021）](https://doi.org/10.1175/JAMC-D-20-0158.1)、[Staebell 等（2021）](https://doi.org/10.5194/amt-14-3737-2021)、[Conway 等（2023）](https://doi.org/10.5194/amt-2023-111)、[Chulakadabba 等（2023）](https://doi.org/10.5194/egusphere-2023-822)、[Abbadi 等（2023）](https://doi.org/10.31223/X51D4C)、[Omara 等（2023）](https://doi.org/10.5194/essd-15-3761-2023) 与 [Miller 等（2023）](https://doi.org/10.5194/egusphere-2023-1962) 的近期出版物。

如需了解该项目的更多信息，请通过此链接联系数据提供方：[https://www.methanesat.org/contact/](https://www.methanesat.org/contact/)

## 覆盖范围与时间

- 覆盖范围：飞行区域（主要为美国油气产区）
- 时间范围：2021-08-06 至 2023-10-14

## 分辨率与规格

- 空间分辨率：约 10.2 米（原生像元约 25 米，格网约 10 米）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| XCH4 | 反演的柱平均干空气 CH4 摩尔分数 | 10.2 |  |
| albedo | 地面太阳辐亮度与传感器观测辐亮度之比 | 10.2 |  |
| surface_pressure | 地表空气压强 | 10.2 |  |
| terrain_height | 相对于 WGS84 参考椭球面的高程 | 10.2 |  |

## 能拿来做什么

- 甲烷柱浓度的高分辨率制图
- 油气区甲烷排放热点识别
- MethaneSAT 卫星任务的机载先行验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('EDF/MethaneSAT/MethaneAIR/L3concentration');
```

- 数据集编号（Earth Engine ID）：`EDF/MethaneSAT/MethaneAIR/L3concentration`
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EDF_MethaneSAT_MethaneAIR_L3concentration

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, climate, edf, emissions, ghg, methane, methaneair, methanesat
- 数据引用：Chan Miller, C., Roche, S., Wilzewski, J. S., Liu, X., Chance, K., Souri,
A. H., Conway, E., Luo, B., Samra, J., Hawthorne, J., Sun, K., Staebell, C.,
Chulakadabba, A., Sargent, M., Benmergui, J. S., Franklin, J. E., Daube, B.
C., Li, Y., Laughner, J. L., Baier, B. C., Gautam, R., Omara, M., and Wofsy,
S. C. 2023. Methane retrieval from MethaneAIR using the CO2 Proxy Approach:
A demonstration for the upcoming MethaneSAT mission, EGUsphere [preprint].
[doi:10.5194/egusphere-2023-19623](https://doi.org/10.5194/egusphere-2023-1962),


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MethaneAIR L4 Area Sources v1](/pages/b2ba5320/)
- [MethaneAIR L4 Point Sources v1](/pages/32e81487/)
- [MethaneAIR L4 Area Sources 2021 [deprecated]](/pages/9a672fd8/)
- [MethaneAIR L4 Point Sources 2021 [deprecated]](/pages/aafea29a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
