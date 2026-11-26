---
title: "LANDFIRE BPS（生物物理设定）v1.4.0"
date: 2026-11-03 12:00:00
permalink: /pages/18949a9a/
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

# LANDFIRE BPS（生物物理设定）v1.4.0

英文原名：LANDFIRE BPS (Biophysical Settings) v1.4.0

## 这是什么数据

LANDFIRE（LF），即景观火灾与资源管理规划工具（Landscape Fire and Resource Management Planning Tools），是美国农业部（USDA）林务局、美国内政部地质调查局与大自然保护协会的野地火灾管理项目之间的共享计划。

LANDFIRE（LF）图层使用基于大量实地参考数据、卫星影像与生物物理梯度图层的预测景观模型、通过分类与回归树创建。

LANDFIRE（LF）的生物物理设定（BPS）表示欧洲-美洲定居之前景观上可能占主导的植被，基于当前生物物理环境与历史干扰制度的近似。制图单元基于 NatureServe 的生态系统分类，表示参考期内可能存在的自然植物群落。每个 BPS 制图单元都与一个植被演替模型匹配，二者都是 LANDSUM 景观演替模型的关键输入。本数据集的实际时间段是火灾制度与植被动态模型所提供的历史背景与制作它所用的较近期实地与地理空间输入的复合。LF 当前的 BPS 与 LF National 的 BPS 相比没有变化，仅对水体、裸地与雪类别做了更新（增删），以使 BPS 产品内的非植被覆盖类型与 LF 现有植被与燃料产品一致。随着 LF Remap for CONUS 在 2020 年中后期最终发布，LF Remap BPS 产品将把以下作为属性包括在内：平均火返回间隔（MFRI）、低严重度火百分比（PLS）、混合严重度火百分比（PMS）、置换严重度火百分比（PRS）与火灾制度组（FRG），以保持这些特征与 BPS 的关联。LF 使用 BPS 描绘景观上植被的参考状况。

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
| BPS | 生物物理设定。 | 30 |  |

## 能拿来做什么

- 植被类型与结构制图
- 景观生态评估
- 火灾与燃料建模输入

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDFIRE/Vegetation/BPS/v1_4_0');
```

- 数据集编号（Earth Engine ID）：`LANDFIRE/Vegetation/BPS/v1_4_0`
- 提供方：U.S. Department of Agriculture's (USDA), U.S. Forest Service (USFS), U.S.
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDFIRE_Vegetation_BPS_v1_4_0

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

- [LANDFIRE ESP AK (Environmental Site Potential) v1.2.0](/pages/b2b4a475/)
- [LANDFIRE ESP CONUS (Environmental Site Potential) v1.2.0](/pages/ca4671c8/)
- [LANDFIRE ESP HI (Environmental Site Potential) v1.2.0](/pages/7bb2ed52/)
- [LANDFIRE EVC (Existing Vegetation Cover) v1.4.0](/pages/c7ab551c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
