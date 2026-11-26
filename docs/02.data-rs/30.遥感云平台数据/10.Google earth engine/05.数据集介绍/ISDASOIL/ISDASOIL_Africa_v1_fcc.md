---
title: "iSDAsoil 肥力能力分类"
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

# iSDAsoil 肥力能力分类

英文原名：iSDAsoil Fertility Capability Classification

## 这是什么数据

使用坡度、化学和物理土壤属性推导的土壤肥力能力分类。有关该层的更多信息，请访问[此页面](https://www.isda-africa.com/isdasoil/faq/#faq7)。

「fcc」波段的类别适用于必须用 `x modulo 3000` 进行反变换的像元值。

在茂密丛林地区（一般在非洲中部），模型精度较低，因此可能看到条带（striping）等伪影。

土壤属性预测由 [Innovative Solutions for Decision Agriculture Ltd. (iSDA)](https://isda-africa.com/) 以 30 米像元大小使用机器学习结合遥感数据和超过 100,000 个已分析土壤样本的训练集制作。

更多信息见 [FAQ](https://www.isda-africa.com/isdasoil/faq/) 和[技术信息文档](https://www.isda-africa.com/isdasoil/technical-information/)。要提交问题或请求支持，请访问 [iSDAsoil 网站](https://isda-africa.com/isdasoil)。

## 覆盖范围与时间

- 覆盖范围：非洲
- 时间范围：2001-01-01 至 2017-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| fcc | 肥力能力分类。样式根据肥力限制因素的数量制作： * 0 个限制：#1a9641 * 1 个限制：#fff1af * 2 个限制：#feb66a * 3 个限制：#f3854e * 4 个限制：#e54f35 * 5 个或更多限制：#d7191c | 30 |  |

## 能拿来做什么

- 非洲土壤属性制图
- 精准农业决策
- 土地退化评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('ISDASOIL/Africa/v1/fcc');
```

- 数据集编号（Earth Engine ID）：`ISDASOIL/Africa/v1/fcc`
- 提供方：iSDA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ISDASOIL_Africa_v1_fcc

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：africa, fcc, isda, soil
- 数据引用：Hengl, T., Miller, M.A.E., Kri&zcaron;an, J., et al. African soil properties and nutrients
mapped at 30 m spatial resolution using two-scale ensemble machine learning.
Sci Rep 11, 6130 (2021).
[doi:10.1038/s41598-021-85639-y](https://doi.org/10.1038/s41598-021-85639-y)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [iSDAsoil Bulk Density, <2mm Fraction](/pages/9e6d23d2/)
- [iSDAsoil Clay Content](/pages/b359c603/)
- [iSDAsoil Depth to Bedrock](/pages/d2d6b77f/)
- [iSDAsoil Effective Cation Exchange Capacity](/pages/c734392b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
