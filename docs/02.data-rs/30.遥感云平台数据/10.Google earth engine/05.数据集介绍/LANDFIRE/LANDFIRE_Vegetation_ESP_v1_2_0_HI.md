---
title: "LANDFIRE ESP 夏威夷（环境场地潜力）v1.2.0"
date: 2026-11-03 12:00:00
permalink: /pages/7bb2ed52/
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

# LANDFIRE ESP 夏威夷（环境场地潜力）v1.2.0

英文原名：LANDFIRE ESP HI (Environmental Site Potential) v1.2.0

## 这是什么数据

LANDFIRE（LF），即景观火灾与资源管理规划工具（Landscape Fire and Resource Management Planning Tools），是美国农业部（USDA）林务局、美国内政部地质调查局与大自然保护协会的野地火灾管理项目之间的共享计划。

LANDFIRE（LF）图层使用基于大量实地参考数据、卫星影像与生物物理梯度图层的预测景观模型、通过分类与回归树创建。

LANDFIRE（LF）的环境场地潜力（ESP）表示基于生物物理环境、某场地可支持的植被。制图单元基于 NatureServe 的生态系统分类，表示参考期内可能存在的自然植物群落。ESP 制图单元表示在没有干扰的情况下、在演替发展的晚期或顶极阶段会建立起来的自然植物群落。它们反映当前气候与物理环境，以及本地植物物种的竞争潜力。ESP 的概念与潜在植被分类（如生境类型与植物群丛）中所用的概念类似。在 LF 的早期版本中，ESP 用于为现有植被与燃料制图过程提供信息。

LANDFIRE 植被数据集包括：

* 生物物理设定（BPS）
* 环境场地潜力（ESP）
* 现有植被冠层覆盖（EVC）
* 现有植被高度（EVH）。
* 现有植被类型（EVT）这些图层使用基于大量实地参考数据、卫星影像与生物物理梯度图层的预测景观模型、通过分类与回归树创建。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：美国夏威夷；时间：2010 年；分辨率：30 米。
- 时间范围：2010-01-01 至 2010-12-31

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ESP | 环境场地潜力。 | 30 |  |

## 能拿来做什么

- 植被类型与结构制图
- 景观生态评估
- 火灾与燃料建模输入

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('LANDFIRE/Vegetation/ESP/v1_2_0/HI');
```

- 数据集编号（Earth Engine ID）：`LANDFIRE/Vegetation/ESP/v1_2_0/HI`
- 提供方：U.S. Department of Agriculture's (USDA), U.S. Forest Service (USFS), U.S.
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDFIRE_Vegetation_ESP_v1_2_0_HI

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
Available:[https://www.landfire.gov/bps-models.php](https://www.landfire.gov/bps-models.php) [2018, June 27].
Additional guidance on citation of LANDFIRE products can be found
[here](https://landfire.gov/data/citation)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [LANDFIRE BPS (Biophysical Settings) v1.4.0](/pages/18949a9a/)
- [LANDFIRE ESP AK (Environmental Site Potential) v1.2.0](/pages/b2b4a475/)
- [LANDFIRE ESP CONUS (Environmental Site Potential) v1.2.0](/pages/ca4671c8/)
- [LANDFIRE EVC (Existing Vegetation Cover) v1.4.0](/pages/c7ab551c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
