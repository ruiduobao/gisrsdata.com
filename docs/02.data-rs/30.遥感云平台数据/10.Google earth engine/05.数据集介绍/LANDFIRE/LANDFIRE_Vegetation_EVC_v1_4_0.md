---
title: "LANDFIRE EVC（现有植被覆盖）v1.4.0"
date: 2026-11-03 12:00:00
permalink: /pages/c7ab551c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "doi"
  - "fire"
  - "forest-biomass"
  - "landfire"
  - "nature-conservancy"
  - "usda"
  - "usgs"
  - "vegetation"
  - "wildfire"
---

# LANDFIRE EVC（现有植被覆盖）v1.4.0

英文原名：LANDFIRE EVC (Existing Vegetation Cover) v1.4.0

## 这是什么数据

LANDFIRE（LF），即景观火灾与资源管理规划工具（Landscape Fire and Resource Management Planning Tools），是美国农业部（USDA）林务局、美国内政部地质调查局与大自然保护协会的野地火灾管理项目之间的共享计划。

LANDFIRE（LF）图层使用基于大量实地参考数据、卫星影像与生物物理梯度图层的预测景观模型、通过分类与回归树创建。

LANDFIRE（LF）的现有植被覆盖（EVC）表示 30 米像元内活冠层的垂直投影覆盖百分比。EVC 使用训练数据与其他地理空间图层，分别为乔木、灌木与草本覆盖生命型生成。乔木、灌木与草本冠层覆盖百分比训练数据使用样地尺度的地面目视评估与激光雷达观测生成。训练数据建立后，再分别为每种生命型建立训练数据与 Landsat 及辅助数据组合之间的关系。每个派生数据图层（乔木、灌木、草本）的潜在范围为 0–100%，它们被合并为单一的复合 EVC 图层。干扰数据用于开发 LF Remap 产品以过滤 LFRDB 样地，并确保源影像中不可见的 2015 与 2016 年干扰被包括在内。然后 EVC 产品通过 QA/QC 措施进行协调，以确保生命型与现有植被高度和现有植被类型产品同步。LF 在若干后续图层中使用 EVC，包括燃料图层的开发。

LANDFIRE 植被数据集包括：

* 生物物理设定（BPS）
* 环境场地潜力（ESP）
* 现有植被冠层覆盖（EVC）
* 现有植被高度（EVH）。
* 现有植被类型（EVT）这些图层使用基于大量实地参考数据、卫星影像与生物物理梯度图层的预测景观模型、通过分类与回归树创建。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：美国；时间：2014 年；分辨率：30 米。
- 时间范围：2014-09-01 至 2014-09-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| EVC | 现有植被覆盖。 | 30 |  |

## 能拿来做什么

- 植被类型与结构制图
- 景观生态评估
- 火灾与燃料建模输入

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDFIRE/Vegetation/EVC/v1_4_0');
```

- 数据集编号（Earth Engine ID）：`LANDFIRE/Vegetation/EVC/v1_4_0`
- 提供方：U.S. Department of Agriculture's (USDA), U.S. Forest Service (USFS), U.S.
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDFIRE_Vegetation_EVC_v1_4_0

## 许可与引用

- 许可：proprietary
- 关键词：doi, fire, forest-biomass, landfire, nature-conservancy, usda, usgs, vegetation, wildfire
- 数据引用：The suggested way to cite LANDFIRE products is specific to each product,
so the model for citation is provided, with an example for a particular product.
Producer. Year released. Product xxxxx:

- Individual model name.
- BpS Models and Descriptions, Online. LANDFIRE. Washington, DC. U.S. Department of
  Agriculture, Forest Service
- U.S. Department of the Interior; U.S. Geological Survey; Arlington, VA
- The Nature Conservancy (Producers). Available- URL. Access date.

Example Citation: LANDFIRE Biophysical Settings. 2018. Biophysical setting 14420:
South Texas sand sheet grassland. In: LANDFIRE Biophysical Setting Model: Map zone 36,
[Online]. In: BpS Models and Descriptions. In: LANDFIRE. Washington, DC:
U.S. Department of Agriculture, Forest Service; U.S. Department of the Interior;
U.S. Geological Survey; Arlington, VA: The Nature Conservancy (Producers).
Available: [https://www.landfire.gov/bps-models.php](https://www.landfire.gov/bps-models.php) [2018, June 27].
Additional guidance on citation of LANDFIRE products can be found
[here](https://landfire.gov/data/citation)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [LANDFIRE BPS (Biophysical Settings) v1.4.0](/pages/18949a9a/)
- [LANDFIRE ESP AK (Environmental Site Potential) v1.2.0](/pages/b2b4a475/)
- [LANDFIRE ESP CONUS (Environmental Site Potential) v1.2.0](/pages/ca4671c8/)
- [LANDFIRE ESP HI (Environmental Site Potential) v1.2.0](/pages/7bb2ed52/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
