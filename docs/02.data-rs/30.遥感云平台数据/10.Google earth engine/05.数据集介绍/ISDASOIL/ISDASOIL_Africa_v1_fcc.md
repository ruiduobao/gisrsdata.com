---
title: "iSDAsoil Fertility Capability Classification"
date: 2026-11-03 12:00:00
permalink: /pages/254f7207/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "africa"
  - "fcc"
  - "isda"
  - "soil"
---

# iSDAsoil Fertility Capability Classification

## 数据集简介

Soil fertility capability classification derived using slope, chemical,
and physical soil properties.  For more information about this layer, please
visit [this page](https://www.isda-africa.com/isdasoil/faq/#faq7).

The classes for the 'fcc' band apply to pixel values that must be
back-transformed with `x modulo 3000`.

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

- 数据集编号（Earth Engine ID）：`ISDASOIL/Africa/v1/fcc`
- 数据类型：影像（Image）
- 提供方：iSDA、Google Earth Engine
- 时间范围：2001-01-01 至 2017-01-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：africa, fcc, isda, soil

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| fcc | Fertility Capability Classification.  Styling has been made according to the number of fertility constraints:  * 0 constraints: #1a9641 * 1 constraint: #fff1af * 2 constraints: #feb66a * 3 constraints: #f3854e * 4 constraints: #e54f35 * 5 or more constraints: #d7191c  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('ISDASOIL/Africa/v1/fcc');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ISDASOIL_Africa_v1_fcc
- 数据引用：Hengl, T., Miller, M.A.E., Kri&zcaron;an, J., et al. African soil properties and nutrients
mapped at 30 m spatial resolution using two-scale ensemble machine learning.
Sci Rep 11, 6130 (2021).
[doi:10.1038/s41598-021-85639-y](https://doi.org/10.1038/s41598-021-85639-y)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
