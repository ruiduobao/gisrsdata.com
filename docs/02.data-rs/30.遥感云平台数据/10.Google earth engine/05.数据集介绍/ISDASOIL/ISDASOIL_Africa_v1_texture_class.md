---
title: "iSDAsoil USDA Texture Class"
date: 2026-11-03 12:00:00
permalink: /pages/662f5c13/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "africa"
  - "aluminium"
  - "isda"
  - "soil"
---

# iSDAsoil USDA Texture Class

## 数据集简介

USDA Texture Class at soil depths of 0-20 cm and 20-50 cm.
In areas of dense jungle (generally over central Africa), model accuracy is
low and therefore artifacts such as banding (striping) might be seen.

Soil property predictions were made by
[Innovative Solutions for Decision Agriculture Ltd. (iSDA)](https://isda-africa.com/)
at 30 m pixel size using machine learning coupled with remote sensing data
and a training set of over 100,000 analyzed soil samples.

Further information can be found in the
[FAQ](https://www.isda-africa.com/isdasoil/faq/) and
[technical information documentation](https://www.isda-africa.com/isdasoil/technical-information/). To submit an issue or request support, please visit
[the iSDAsoil site](https://isda-africa.com/isdasoil).

## 基本信息

- 数据集编号（Earth Engine ID）：`ISDASOIL/Africa/v1/texture_class`
- 数据类型：影像（Image）
- 提供方：iSDA、Google Earth Engine
- 时间范围：2001-01-01 至 2017-01-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：africa, aluminium, isda, soil

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| texture_0_20 | USDA Texture Class at 0-20 cm depth | 30 |  |
| texture_20_50 | USDA Texture Class at 20-50 cm depth | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('ISDASOIL/Africa/v1/texture_class');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ISDASOIL_Africa_v1_texture_class
- 数据引用：Hengl, T., Miller, M.A.E., Kri&zcaron;an, J., et al. African soil properties and nutrients
mapped at 30 m spatial resolution using two-scale ensemble machine learning.
Sci Rep 11, 6130 (2021).
[doi:10.1038/s41598-021-85639-y](https://doi.org/10.1038/s41598-021-85639-y)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
