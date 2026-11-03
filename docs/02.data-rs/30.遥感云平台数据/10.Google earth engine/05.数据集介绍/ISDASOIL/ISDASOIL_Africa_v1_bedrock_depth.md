---
title: "iSDAsoil Depth to Bedrock"
date: 2026-11-03 12:00:00
permalink: /pages/d2d6b77f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "africa"
  - "bedrock"
  - "isda"
  - "soil"
---

# iSDAsoil Depth to Bedrock

## 数据集简介

Depth to bedrock at 0-200 cm depth, predicted mean and standard deviation.

Due to the potential cropland mask that was used for generating the data,
many areas of exposed rock (where depth to bedrock would be 0 cm) have been
masked out and therefore appear as nodata values. The maximum depth of this
layer is 200 cm, but this does not represent the maximum possible soil depth,
therefore values of 200 should be interpreted as >= 200.

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

- 数据集编号（Earth Engine ID）：`ISDASOIL/Africa/v1/bedrock_depth`
- 数据类型：影像（Image）
- 提供方：iSDA、Google Earth Engine
- 时间范围：2001-01-01 至 2017-01-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：africa, bedrock, isda, soil

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| mean_0_200 | Depth to bedrock, predicted mean at 0-200 cm depth | 30 |  |
| stdev_0_200 | Depth to bedrock, standard deviation at 0-20 cm depth | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('ISDASOIL/Africa/v1/bedrock_depth');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ISDASOIL_Africa_v1_bedrock_depth
- 数据引用：Hengl, T., Miller, M.A.E., Kri&zcaron;an, J., et al. African soil properties and nutrients
mapped at 30 m spatial resolution using two-scale ensemble machine learning.
Sci Rep 11, 6130 (2021).
[doi:10.1038/s41598-021-85639-y](https://doi.org/10.1038/s41598-021-85639-y)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
