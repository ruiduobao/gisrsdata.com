---
title: "IPCC AR6 海平面预估：区域（中等置信度）"
date: 2026-11-03 12:00:00
permalink: /pages/fd53e731/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ipcc"
  - "oceans"
  - "sea-level-changes"
---

# IPCC AR6 海平面预估：区域（中等置信度）

英文原名：IPCC AR6 Sea Level Projections Regional (Medium Confidence)

## 这是什么数据

IPCC 提供的数据集包含来自 IPCC 第六次评估报告（AR6）的全面全球和区域海平面预估。该集合包含中等置信度海平面上升预估的资产。该数据集跨越 2020 年到 2150 年，包括 AR6 中概述的各种未来情景的预估。它详细分解了对海平面变化有贡献的各个过程，以及全球平均预估和规则全球网格上的区域预估。这些预估与 IPCC AR6 报告中的预估一致，确保了一致性和可靠性。（特定验潮站位置的本地预估未包括在内，因为它们不在规则网格上。）

以下是数据集中包含的未来情景的摘要：

- SSP1-1.9 在轻微超调后（中位数）将 2100 年的变暖保持在比 1850–1900 年高约 1.5°C，并意味着在本世纪中叶左右实现 CO2 净零排放。 - SSP1-2.6 相对于 1850–1900 年将变暖保持在 2.0°C 以下（中位数），并意味着在本世纪下半叶实现净零排放。 - SSP2-4.5 与 2030 年国家自主贡献（NDC）总排放水平的上端大致一致。SR1.5 评估的 NDC 温度预估为到 2100 年在 2.7 到 3.4°C 之间，对应 SSP2-4.5 下预估变暖的上半部分。 - SSP3-7.0 是一个中到高的参考情景，源于 SSP3 社会经济发展叙事下没有额外的气候政策。SSP3-7.0 的非 CO2 排放特别高，包括高气溶胶排放。 - SSP5-8.5 是一个没有额外气候政策的高参考情景。高达 SSP5-8.5 的排放水平，在化石燃料驱动的 SSP5 社会经济发展路径之外的任何 SSP 下，都无法由综合评估模型（IAM）获得。

海平面预估情景的每个分量都作为单独的波段提供，详见下表。

分量 | 说明 :--------------------- | :---------------------------------------------- Total | 对所有分量积分的总量 AIS | 南极冰盖 GIS | 格陵兰冰盖 glaciers | 冰川 landwaterstorage | 陆地水储量 oceandynamics | 海洋动力学（包括热膨胀） verticallandmotion | 垂直陆地运动（非气候过程）

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2020-01-01 至 2120-01-01

## 分辨率与规格

- 空间分辨率：约 111.32 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| total_rates_quantile_0 | 分位数 0 处的总速率 | 111.32 |  |
| total_rates_quantile_0_001 | 分位数 0.001 处的总速率 | 111.32 |  |
| total_rates_quantile_0_005 | 分位数 0.005 处的总速率 | 111.32 |  |
| total_rates_quantile_0_01 | 分位数 0.01 处的总速率 | 111.32 |  |
| total_rates_quantile_0_02 | 分位数 0.02 处的总速率 | 111.32 |  |
| total_rates_quantile_0_03 | 分位数 0.03 处的总速率 | 111.32 |  |
| total_rates_quantile_0_04 | 分位数 0.04 处的总速率 | 111.32 |  |
| total_rates_quantile_0_05 | 分位数 0.05 处的总速率 | 111.32 |  |
| total_rates_quantile_0_06 | 分位数 0.06 处的总速率 | 111.32 |  |
| total_rates_quantile_0_07 | 分位数 0.07 处的总速率 | 111.32 |  |
| total_rates_quantile_0_08 | 分位数 0.08 处的总速率 | 111.32 |  |
| total_rates_quantile_0_09 | 分位数 0.09 处的总速率 | 111.32 |  |
| total_rates_quantile_0_1 | 分位数 0.1 处的总速率 | 111.32 |  |
| total_rates_quantile_0_11 | 分位数 0.11 处的总速率 | 111.32 |  |
| total_rates_quantile_0_12 | 分位数 0.12 处的总速率 | 111.32 |  |
| total_rates_quantile_0_13 | 分位数 0.13 处的总速率 | 111.32 |  |
| total_rates_quantile_0_14 | 分位数 0.14 处的总速率 | 111.32 |  |
| total_rates_quantile_0_15 | 分位数 0.15 处的总速率 | 111.32 |  |
| total_rates_quantile_0_16 | 分位数 0.16 处的总速率 | 111.32 |  |
| total_rates_quantile_0_167 | 分位数 0.167 处的总速率 | 111.32 |  |
| total_rates_quantile_0_17 | 分位数 0.17 处的总速率 | 111.32 |  |
| total_rates_quantile_0_18 | 分位数 0.18 处的总速率 | 111.32 |  |
| total_rates_quantile_0_19 | 分位数 0.19 处的总速率 | 111.32 |  |
| total_rates_quantile_0_2 | 分位数 0.2 处的总速率 | 111.32 |  |
| total_rates_quantile_0_21 | 分位数 0.21 处的总速率 | 111.32 |  |
| total_rates_quantile_0_22 | 分位数 0.22 处的总速率 | 111.32 |  |
| total_rates_quantile_0_23 | 分位数 0.23 处的总速率 | 111.32 |  |
| total_rates_quantile_0_24 | 分位数 0.24 处的总速率 | 111.32 |  |
| total_rates_quantile_0_25 | 分位数 0.25 处的总速率 | 111.32 |  |
| total_rates_quantile_0_26 | 分位数 0.26 处的总速率 | 111.32 |  |
| total_rates_quantile_0_27 | 分位数 0.27 处的总速率 | 111.32 |  |
| total_rates_quantile_0_28 | 分位数 0.28 处的总速率 | 111.32 |  |
| total_rates_quantile_0_29 | 分位数 0.29 处的总速率 | 111.32 |  |
| total_rates_quantile_0_3 | 分位数 0.3 处的总速率 | 111.32 |  |
| total_rates_quantile_0_31 | 分位数 0.31 处的总速率 | 111.32 |  |
| total_rates_quantile_0_32 | 分位数 0.32 处的总速率 | 111.32 |  |
| total_rates_quantile_0_33 | 分位数 0.33 处的总速率 | 111.32 |  |
| total_rates_quantile_0_34 | 分位数 0.34 处的总速率 | 111.32 |  |
| total_rates_quantile_0_35 | 分位数 0.35 处的总速率 | 111.32 |  |
| total_rates_quantile_0_36 | 分位数 0.36 处的总速率 | 111.32 |  |
| total_rates_quantile_0_37 | 分位数 0.37 处的总速率 | 111.32 |  |
| total_rates_quantile_0_38 | 分位数 0.38 处的总速率 | 111.32 |  |
| total_rates_quantile_0_39 | 分位数 0.39 处的总速率 | 111.32 |  |
| total_rates_quantile_0_4 | 分位数 0.4 处的总速率 | 111.32 |  |
| total_rates_quantile_0_41 | 分位数 0.41 处的总速率 | 111.32 |  |
| total_rates_quantile_0_42 | 分位数 0.42 处的总速率 | 111.32 |  |
| total_rates_quantile_0_43 | 分位数 0.43 处的总速率 | 111.32 |  |
| total_rates_quantile_0_44 | 分位数 0.44 处的总速率 | 111.32 |  |
| total_rates_quantile_0_45 | 分位数 0.45 处的总速率 | 111.32 |  |
| total_rates_quantile_0_46 | 分位数 0.46 处的总速率 | 111.32 |  |
| total_rates_quantile_0_47 | 分位数 0.47 处的总速率 | 111.32 |  |
| total_rates_quantile_0_48 | 分位数 0.48 处的总速率 | 111.32 |  |
| total_rates_quantile_0_49 | 分位数 0.49 处的总速率 | 111.32 |  |
| total_rates_quantile_0_5 | 分位数 0.5 处的总速率 | 111.32 |  |
| total_rates_quantile_0_51 | 分位数 0.51 处的总速率 | 111.32 |  |
| total_rates_quantile_0_52 | 分位数 0.52 处的总速率 | 111.32 |  |
| total_rates_quantile_0_53 | 分位数 0.53 处的总速率 | 111.32 |  |
| total_rates_quantile_0_54 | 分位数 0.54 处的总速率 | 111.32 |  |
| total_rates_quantile_0_55 | 分位数 0.55 处的总速率 | 111.32 |  |
| total_rates_quantile_0_56 | 分位数 0.56 处的总速率 | 111.32 |  |
| total_rates_quantile_0_57 | 分位数 0.57 处的总速率 | 111.32 |  |
| total_rates_quantile_0_58 | 分位数 0.58 处的总速率 | 111.32 |  |
| total_rates_quantile_0_59 | 分位数 0.59 处的总速率 | 111.32 |  |
| total_rates_quantile_0_6 | 分位数 0.6 处的总速率 | 111.32 |  |
| total_rates_quantile_0_61 | 分位数 0.61 处的总速率 | 111.32 |  |
| total_rates_quantile_0_62 | 分位数 0.62 处的总速率 | 111.32 |  |
| total_rates_quantile_0_63 | 分位数 0.63 处的总速率 | 111.32 |  |
| total_rates_quantile_0_64 | 分位数 0.64 处的总速率 | 111.32 |  |
| total_rates_quantile_0_65 | 分位数 0.65 处的总速率 | 111.32 |  |
| total_rates_quantile_0_66 | 分位数 0.66 处的总速率 | 111.32 |  |
| total_rates_quantile_0_67 | 分位数 0.67 处的总速率 | 111.32 |  |
| total_rates_quantile_0_68 | 分位数 0.68 处的总速率 | 111.32 |  |
| total_rates_quantile_0_69 | 分位数 0.69 处的总速率 | 111.32 |  |
| total_rates_quantile_0_7 | 分位数 0.7 处的总速率 | 111.32 |  |
| total_rates_quantile_0_71 | 分位数 0.71 处的总速率 | 111.32 |  |
| total_rates_quantile_0_72 | 分位数 0.72 处的总速率 | 111.32 |  |
| total_rates_quantile_0_73 | 分位数 0.73 处的总速率 | 111.32 |  |
| total_rates_quantile_0_74 | 分位数 0.74 处的总速率 | 111.32 |  |
| total_rates_quantile_0_75 | 分位数 0.75 处的总速率 | 111.32 |  |
| total_rates_quantile_0_76 | 分位数 0.76 处的总速率 | 111.32 |  |

## 能拿来做什么

- 海平面上升区域预估
- 沿海洪水风险评估
- 气候适应规划

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('IPCC/AR6/SLP');
```

- 数据集编号（Earth Engine ID）：`IPCC/AR6/SLP`
- 提供方：IPCC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IPCC_AR6_SLP

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ipcc, oceans, sea-level-changes
- 数据引用：Garner, G. G., T. Hermans, R. E. Kopp, A. B. A. Slangen, T. L. Edwards,
A. Levermann, S. Nowikci, M. D. Palmer, C. Smith, B. Fox-Kemper,
H. T. Hewitt, C. Xiao, G. Aðalgeirsdóttir, S. S. Drijfhout, T. L. Edwards,
N. R. Golledge, M. Hemer, G. Krinner, A. Mix, D. Notz, S. Nowicki,
I. S. Nurhati, L. Ruiz, J-B. Sallée, Y. Yu, L. Hua, T. Palmer, B. Pearson,
2021. IPCC AR6 Sea Level Projections. Version 20210809. Dataset
accessed [YYYY-MM-DD] at
[10.5281/zenodo.5914709](https://doi.org/10.5281/zenodo.5914709)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)
- [ECMWF 近实时 IFS 海浪预报（短截断）](/pages/423330ad/)
- [GFW（全球渔业观察）每日捕捞小时数](/pages/7dfa6e21/)
- [GFW（全球渔业观察）每日船舶小时数](/pages/37ea4824/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
