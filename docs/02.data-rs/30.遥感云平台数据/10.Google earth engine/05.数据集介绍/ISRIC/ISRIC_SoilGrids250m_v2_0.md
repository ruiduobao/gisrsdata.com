---
title: "SoilGrids250m 2.0 土壤体积含水量"
date: 2026-11-03 12:00:00
permalink: /pages/ec88a629/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "soil"
  - "soil-moisture"
  - "water"
---

# SoilGrids250m 2.0 土壤体积含水量

英文原名：SoilGrids250m 2.0 - Volumetric Water Content

## 这是什么数据

10 kPa、33 kPa 与 1500 kPa 三种吸力下的体积含水量，单位为 10^-3 cm³/cm³（即 0.1 v% 或 1 mm/m），共 6 个标准深度（0–5 cm、5–15 cm、15–30 cm、30–60 cm、60–100 cm、100–200 cm）。预测采用基于分位数随机森林（Quantile Random Forest）的数字土壤制图方法，依托全球土壤剖面数据汇编与环境图层生成。本数据集包含三种吸力水平的预测，可用于认识土壤水分有效性。

数据集组织为三个主资产：`/wv0010`、`/wv0033` 与 `/wv1500`。每个资产包含表示不同深度与分位数土壤属性的波段。波段名遵循 `val_<depth>_<quantile>` 模式，其中 `depth` 表示土壤深度范围（如 0–5 cm、5–15 cm、15–30 cm、30–60 cm、60–100 cm、100–200 cm），`quantile` 表示统计量（如均值、Q0.05、Q0.5、Q0.95）。

不确定性波段尚未包含在内。可以由分位数间距（90% 预测区间宽度）与中位数之比计算不确定性：(Q0.95−Q0.05)/Q0.50。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；时间范围：1905 年至 2016 年（源土壤剖面观测期）；分辨率：250 米。
- 时间范围：1905-04-01 至 2016-07-05

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| val_0_5cm_mean | 体积含水量均值（0–5 cm 深度） | 250 |  |
| val_0_5cm_Q0_05 | 体积含水量Q0.05 分位数（0–5 cm 深度） | 250 |  |
| val_0_5cm_Q0_5 | 体积含水量Q0.5 分位数（0–5 cm 深度） | 250 |  |
| val_0_5cm_Q0_95 | 体积含水量Q0.95 分位数（0–5 cm 深度） | 250 |  |
| val_5_15cm_mean | 体积含水量均值（5–15 cm 深度） | 250 |  |
| val_5_15cm_Q0_05 | 体积含水量Q0.05 分位数（5–15 cm 深度） | 250 |  |
| val_5_15cm_Q0_5 | 体积含水量Q0.5 分位数（5–15 cm 深度） | 250 |  |
| val_5_15cm_Q0_95 | 体积含水量Q0.95 分位数（5–15 cm 深度） | 250 |  |
| val_15_30cm_mean | 体积含水量均值（15–30 cm 深度） | 250 |  |
| val_15_30cm_Q0_05 | 体积含水量Q0.05 分位数（15–30 cm 深度） | 250 |  |
| val_15_30cm_Q0_5 | 体积含水量Q0.5 分位数（15–30 cm 深度） | 250 |  |
| val_15_30cm_Q0_95 | 体积含水量Q0.95 分位数（15–30 cm 深度） | 250 |  |
| val_30_60cm_mean | 体积含水量均值（30–60 cm 深度） | 250 |  |
| val_30_60cm_Q0_05 | 体积含水量Q0.05 分位数（30–60 cm 深度） | 250 |  |
| val_30_60cm_Q0_5 | 体积含水量Q0.5 分位数（30–60 cm 深度） | 250 |  |
| val_30_60cm_Q0_95 | 体积含水量Q0.95 分位数（30–60 cm 深度） | 250 |  |
| val_60_100cm_mean | 体积含水量均值（60–100 cm 深度） | 250 |  |
| val_60_100cm_Q0_05 | 体积含水量Q0.05 分位数（60–100 cm 深度） | 250 |  |
| val_60_100cm_Q0_5 | 体积含水量Q0.5 分位数（60–100 cm 深度） | 250 |  |
| val_60_100cm_Q0_95 | 体积含水量Q0.95 分位数（60–100 cm 深度） | 250 |  |
| val_100_200cm_mean | 体积含水量均值（100–200 cm 深度） | 250 |  |
| val_100_200cm_Q0_05 | 体积含水量Q0.05 分位数（100–200 cm 深度） | 250 |  |
| val_100_200cm_Q0_5 | 体积含水量Q0.5 分位数（100–200 cm 深度） | 250 |  |
| val_100_200cm_Q0_95 | 体积含水量Q0.95 分位数（100–200 cm 深度） | 250 |  |

## 能拿来做什么

- 土壤水分与持水能力分析
- 灌溉与农业干旱评估
- 水文与陆面过程模型输入

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ISRIC/SoilGrids250m/v2_0');
```

- 数据集编号（Earth Engine ID）：`ISRIC/SoilGrids250m/v2_0`
- 提供方：ISRIC - World Soil Information、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ISRIC_SoilGrids250m_v2_0
* [Scientific Paper](https://www.sciencedirect.com/science/article/pii/S2095633922000636?via%3Dihub)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：soil, soil-moisture, water
- 数据引用：Global mapping of volumetric water retention at 100, 330 and 15000 cm
suction using the WoSIS database
Turek M.E., Poggio L., Batjes N.H., Armindo R.A., de Jong van Lier Q.,
de Sousa L., Heuvelink G.B.M. (2023)
International Soil and Water Conservation Research, 11 (2), pp. 225-239.

- DOI：10.1016/j.iswcr.2022.08.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [排干有机土排放（年度）1.0](/pages/664c80e9/)
- [澳大利亚土壤与景观格网（土壤属性）](/pages/6de4314d/)
- [联合国粮农组织排干有机土面积（年度）1.0](/pages/2e5790b1/)
- [NLDAS-2: North American Land Data Assimilation System Forcing Fields](/pages/4a88073a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
