---
title: "GCOM-C/SGLI 三级叶绿素 a 浓度产品（V2）"
date: 2026-11-03 12:00:00
permalink: /pages/834e6e14/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "chla"
  - "chlorophyll-a"
  - "g-portal"
  - "gcom"
  - "gcom-c"
  - "jaxa"
  - "ocean-color"
  - "oceans"
---

# GCOM-C/SGLI 三级叶绿素 a 浓度产品（V2）

英文原名：GCOM-C/SGLI L3 Chlorophyll-a Concentration (V2)

## 这是什么数据

本产品是海表层浮游植物中光合色素（叶绿素 a）的浓度。

2021 年 11 月 28 日之后的数据见 [V3 数据集](JAXA/GCOM-C/L3/LAND/CHLA/V3)。

GCOM-C 开展长期、连续的全球观测与数据收集，以阐明辐射收支与碳循环的波动机制——这是准确预估未来升温所必需的；同时与拥有气候数值模式的研究机构合作，致力于减小气候数值模式的温度上升预估误差、提高各类环境变化预估的精度。搭载于 GCOM-C 的 SGLI 是 ADEOS-II（MIDORI II）所载全球成像仪（GLI）的后继传感器，是一台测量近紫外到热红外区域（380 nm–12 μm）辐射的成像辐射计，共 19 个通道；凭借大于 1,000 km 的地面观测幅宽，可在日本附近中纬度地区实现约每两天一次的全球观测。此外，SGLI 实现了高于同类全球传感器的分辨率，并具备偏振观测功能与多角度观测功能。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球海洋；时间范围：2018 年 1 月 1 日至 2021 年 11 月 28 日；分辨率：约 4,638 米。
- 时间范围：2018-01-01 至 2021-11-28

## 分辨率与规格

- 空间分辨率：约 4,638.3 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CHLA_AVE | 海表层浮游植物中绿色色素（叶绿素 a）的浓度。 | 4638.3 |  |
| CHLA_QA_flag | CHLA 质量标志。 | 4638.3 |  |

## 能拿来做什么

- 海洋初级生产力与浮游植物监测
- 渔业与赤潮预警
- 海洋碳循环研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JAXA/GCOM-C/L3/OCEAN/CHLA/V2');
```

- 数据集编号（Earth Engine ID）：`JAXA/GCOM-C/L3/OCEAN/CHLA/V2`
- 提供方：Global Change Observation Mission (GCOM)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_GCOM-C_L3_OCEAN_CHLA_V2

## 许可与引用

- 许可：proprietary
- 关键词：chla, chlorophyll-a, g-portal, gcom, gcom-c, jaxa, ocean-color, oceans
- 数据引用：Murakami, H. (Jan. 2020). ATBD of GCOM-C chlorophyll-a concentration algorithm (Version 2).
Retrieved from [https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver2/V2ATBD_O3AB_Chla_Murakami.pdf](https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver2/V2ATBD_O3AB_Chla_Murakami.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GCOM-C/SGLI L3 Chlorophyll-a Concentration (V1)](/pages/9e90afdc/)
- [GCOM-C/SGLI L3 Chlorophyll-a Concentration (V3)](/pages/7e6d6232/)
- [GCOM-C/SGLI L3 Sea Surface Temperature (V1)](/pages/e9d27326/)
- [GCOM-C/SGLI L3 Sea Surface Temperature (V2)](/pages/f830a5c2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
