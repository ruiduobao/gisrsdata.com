---
title: "GRIDMET 干旱指数：美国本土干旱指数"
date: 2026-11-03 12:00:00
permalink: /pages/f6533466/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "climatic-water-balance"
  - "conus"
  - "crop"
  - "drought"
  - "eddi"
  - "evapotranspiration"
  - "geophysical"
  - "gridmet"
  - "merced"
  - "metdata"
  - "palmer"
---

# GRIDMET 干旱指数：美国本土干旱指数

英文原名：GRIDMET DROUGHT: CONUS Drought Indices

## 这是什么数据

该数据集包含源自 4 公里逐日格网地表气象（GRIDMET）数据集的干旱指数。提供的干旱指数包括标准化降水指数（SPI）、蒸发干旱需求指数（EDDI）、标准化降水蒸散指数（SPEI）、帕尔默干旱严重指数（PDSI）和帕尔默 Z 指数（Z）。

SPI、EDDI 和 SPEI 以不同的时间尺度提供，分别对应降水、参考蒸散量以及降水减去参考蒸散量的时间聚合。时间尺度包括 14 天、30 天、90 天、180 天、270 天、1 年、2 年和 5 年。标准化使用基于非参数标准化概率的方法，其中使用绘图位置（plotting positions）获得概率，并假设逆正态分布将概率转换为指数。所有数据都在 1981–2016 年的共同时间段上标准化。

PDSI 和 Z 使用帕尔默公式的修改版计算，该公式使用 GRIDMET 的参考蒸散量和降水，以及来自 STATSGO 的静态土壤持水能力层（顶部 1500 毫米）。对原始帕尔默公式的系数做了修改以计算 PDSI。PDSI 和 Z 计算的基准期为 1979–2018 年。

该数据集中干旱指数的解释，PDSI 和 Z 与 SPI、SPEI 和 EDDI 不同。利用美国干旱监测（US Drought Monitor）的解释，这些干旱指数值的含义如下：

PDSI 和 z：

* 5.0 或以上（极端湿润） * 4.0 至 4.99（很湿润） * 3.0 至 3.99（中度湿润）， * 2.0 至 2.99（轻微湿润） * 1.0 至 1.99（初始湿润期） * -0.99 至 0.99（接近正常） * -1.99 至 -1.00（初始干旱期） * -2.99 至 -2.00（轻度干旱） * -3.99 至 -3.00（中度干旱） * -4.99 至 -4.00（严重干旱） * -5.0 或以下（极端干旱）

SPI/SPEI/EDDI：

* 2.0 或以上（极端湿润） * 1.6 至 1.99（很湿润） * 1.3 至 1.59（中度湿润）， * 0.8 至 1.29（轻微湿润） * 0.5 至 0.79（初始湿润期） * -0.49 至 0.49（接近正常）， * -0.79 至 -0.5（初始干旱期） * -1.29 至 -0.8（轻度干旱） * -1.59 至 -1.3（中度干旱） * -1.99 至 -1.6（严重干旱） * -2.0 或以下（极端干旱）。

该数据集包含临时产品，当完整的源数据可用时会被更新版本替换。产品可通过 'status' 属性值区分。起初，资产以 status='early' 摄入。几天后，它们被 status='provisional' 的资产替换。大约 2 个月后，它们被 status='permanent' 的最终资产替换。

## 覆盖范围与时间

- 覆盖范围：美国本土（CONUS）
- 时间范围：1980-01-05 至 2026-10-22

## 分辨率与规格

- 空间分辨率：约 4,638.3 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| spi14d | 标准化降水指数（SPI），降水按最近 14 天 聚合 | 4638.3 |  |
| spi30d | 标准化降水指数（SPI），降水按最近 30 天 聚合 | 4638.3 |  |
| spi90d | 标准化降水指数（SPI），降水按最近 90 天 聚合 | 4638.3 |  |
| spi180d | 标准化降水指数（SPI），降水按最近 180 天 聚合 | 4638.3 |  |
| spi270d | 标准化降水指数（SPI），降水按最近 270 天 聚合 | 4638.3 |  |
| spi1y | 标准化降水指数（SPI），降水按最近 1 年 聚合 | 4638.3 |  |
| spi2y | 标准化降水指数（SPI），降水按最近 2 年 聚合 | 4638.3 |  |
| spi5y | 标准化降水指数（SPI），降水按最近 5 年 聚合 | 4638.3 |  |
| eddi14d | 蒸发干旱需求指数（EDDI），潜在蒸散量按最近 14 天 聚合 | 4638.3 |  |
| eddi30d | 蒸发干旱需求指数（EDDI），潜在蒸散量按最近 30 天 聚合 | 4638.3 |  |
| eddi90d | 蒸发干旱需求指数（EDDI），潜在蒸散量按最近 90 天 聚合 | 4638.3 |  |
| eddi180d | 蒸发干旱需求指数（EDDI），潜在蒸散量按最近 180 天 聚合 | 4638.3 |  |
| eddi270d | 蒸发干旱需求指数（EDDI），潜在蒸散量按最近 270 天 聚合 | 4638.3 |  |
| eddi1y | 蒸发干旱需求指数（EDDI），潜在蒸散量按最近 1 年 聚合 | 4638.3 |  |
| eddi2y | 蒸发干旱需求指数（EDDI），潜在蒸散量按最近 2 年 聚合 | 4638.3 |  |
| eddi5y | 蒸发干旱需求指数（EDDI），潜在蒸散量按最近 5 年 聚合 | 4638.3 |  |
| spei14d | 标准化降水蒸散指数（SPEI），气候水分平衡按最近 14 天 聚合 | 4638.3 |  |
| spei30d | 标准化降水蒸散指数（SPEI），气候水分平衡按最近 30 天 聚合 | 4638.3 |  |
| spei90d | 标准化降水蒸散指数（SPEI），气候水分平衡按最近 90 天 聚合 | 4638.3 |  |
| spei180d | 标准化降水蒸散指数（SPEI），气候水分平衡按最近 180 天 聚合 | 4638.3 |  |
| spei270d | 标准化降水蒸散指数（SPEI），气候水分平衡按最近 270 天 聚合 | 4638.3 |  |
| spei1y | 标准化降水蒸散指数（SPEI），气候水分平衡按最近 1 年 聚合 | 4638.3 |  |
| spei2y | 标准化降水蒸散指数（SPEI），气候水分平衡按最近 2 年 聚合 | 4638.3 |  |
| spei5y | 标准化降水蒸散指数（SPEI），气候水分平衡按最近 5 年 聚合 | 4638.3 |  |
| pdsi | 帕尔默干旱严重指数 | 4638.3 |  |
| z | 帕尔默 Z 指数 | 4638.3 |  |

## 能拿来做什么

- 干旱监测与预警
- 农业干旱评估
- 水资源管理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('GRIDMET/DROUGHT');
```

- 数据集编号（Earth Engine ID）：`GRIDMET/DROUGHT`
- 提供方：University of California Merced、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GRIDMET_DROUGHT

## 许可与引用

- 许可：proprietary
- 关键词：climate, climatic-water-balance, conus, crop, drought, eddi, evapotranspiration, geophysical, gridmet, merced, metdata, palmer, pdsi, precipitation, spei, spi, surface-ground-water, water-vapor
- 数据引用：Abatzoglou J. T., Development of gridded surface meteorological data for
ecological applications and modelling, International Journal of
Climatology. (2012)
[doi:10.1002/joc.3413](https://doi.org/10.1002/joc.3413)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GLCF：Landsat 全球内陆水体](/pages/500a347f/)
- [全球网格人口 GPWv4.11：水体掩膜](/pages/d70c6d97/)
- [全球网格人口 GPWv4.11：水域面积](/pages/0f13e587/)
- [美国 BLM 土地健康野外样地数据（AIM TerrADat）](/pages/53c74382/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
