---
title: "NASA-USDA 全球土壤水分数据 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/369d0375/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "geophysical"
  - "hsl"
  - "nasa"
  - "smos"
  - "soil"
  - "soil-moisture"
  - "usda"
---

# NASA-USDA 全球土壤水分数据 [已弃用]

英文原名：NASA-USDA Global Soil Moisture Data [deprecated]

## 这是什么数据

NASA-USDA 全球土壤水分与 NASA-USDA SMAP 全球土壤水分数据集 以 0.25°×0.25° 空间分辨率提供全球土壤水分信息。这些数据集包括[地表](https://gimms.gsfc.nasa.gov/SMOS/SMAP/Surface_Soil_Moisture_SMAP.pdf) 与 [地下](https://gimms.gsfc.nasa.gov/SMOS/SMAP/Sub_SurfaceSoil_Moisture_SMAP.pdf) 土壤水分（毫米）、[土壤水分剖面](https://gimms.gsfc.nasa.gov/SMOS/SMAP/SoilMoisture_Profile_SMAP.pdf)（%），以及地表与地下土壤水分异常。土壤水分异常无单位，表示使用 31 天移动窗口计算的标准化异常。0 附近的值指示典型水分条件，而非常正与非常负的值分别指示极端湿润（土壤水分条件高于平均）与干燥（土壤水分条件低于平均）。

数据集通过使用一维集合卡尔曼滤波（EnKF）数据同化方法，将卫星源的土壤水分海洋盐度（SMOS）二级土壤水分观测整合进改进的双层 Palmer 模式生成。SMOS 土壤水分观测的同化有助于改进基于模式的土壤水分预测，特别是在世界上缺乏高质量降水数据的仪器稀疏地区（如南部非洲、中东）。

本数据集由 NASA 戈达德航天飞行中心水文科学实验室（HSL）与 USDA 海外农业局及 USDA 水文与遥感实验室合作开发。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2010 年至 2020 年；分辨率：27,830 米。
- 时间范围：2010-01-13 至 2020-12-31

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ssm | 地表土壤水分。 | 27830 |  |
| susm | 地下土壤水分。 | 27830 |  |
| smp | 土壤水分剖面。 | 27830 |  |
| ssma | 地表土壤水分异常。 | 27830 |  |
| susma | 地下土壤水分异常。 | 27830 |  |

## 能拿来做什么

- 全球土壤水分监测
- 农业干旱评估
- 作物产量预测支持

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA_USDA/HSL/soil_moisture');
```

- 数据集编号（Earth Engine ID）：`NASA_USDA/HSL/soil_moisture`
- 提供方：NASA GSFC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_USDA_HSL_soil_moisture

## 许可与引用

- 许可：proprietary
- 关键词：geophysical, hsl, nasa, smos, soil, soil-moisture, usda
- 数据引用：**Bolten, J., W.T. Crow, X. Zhan, T.J. Jackson, and C.A. Reynolds (2010).**
Evaluating the Utility of Remotely Sensed Soil Moisture Retrievals for
Operational Agricultural Drought Monitoring, *IEEE Transactions on
Geoscience and Remote Sensing*, 3(1): 57-66.
[doi:10.1109/JSTARS.2009.2037163](https://doi.org/10.1109/JSTARS.2009.2037163)
[Google Scholar](https://scholar.google.com/scholar?as_sdt=0%2C21&q=Improved+prediction+of+quasi-global+vegetation+conditions+using+remotely-sensed+surface+soil+moisture%2C+&btnG=)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NASA-USDA SMAP 全球土壤水分数据 [已弃用]](/pages/e11c9b76/)
- [NASA-USDA 增强 SMAP 全球土壤水分数据 [已弃用]](/pages/7cc9ac3e/)
- [NLDAS-2：北美陆地数据同化系统强迫场](/pages/4a88073a/)
- [SPL3SMP_E.005 SMAP 三级辐射计全球逐日 9 千米土壤水分](/pages/ff73e36e/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
