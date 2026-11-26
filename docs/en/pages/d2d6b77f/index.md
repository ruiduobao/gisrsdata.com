---
title: "iSDAsoil Depth to Bedrock"
date: 2026-11-03 12:00:00
---

# iSDAsoil Depth to Bedrock

Original name: iSDAsoil Depth to Bedrock

## What this dataset is

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

## Coverage and time range

- Coverage: Africa
- Time range: 2001-01-01 至 2017-01-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| mean_0_200 | Depth to bedrock, predicted mean at 0-200 cm depth | 30 |  |
| stdev_0_200 | Depth to bedrock, standard deviation at 0-20 cm depth | 30 |  |

## What you can use it for

- African soil property mapping
- Precision agriculture decisions
- Land degradation assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('ISDASOIL/Africa/v1/bedrock_depth');
```

- Earth Engine ID: `ISDASOIL/Africa/v1/bedrock_depth`
- Providers: iSDA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ISDASOIL_Africa_v1_bedrock_depth

## License and citation

- License: CC-BY-4.0
- Keywords: africa, bedrock, isda, soil
- 数据引用：Hengl, T., Miller, M.A.E., Kri&zcaron;an, J., et al. African soil properties and nutrients
mapped at 30 m spatial resolution using two-scale ensemble machine learning.
Sci Rep 11, 6130 (2021).
[doi:10.1038/s41598-021-85639-y](https://doi.org/10.1038/s41598-021-85639-y)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [iSDAsoil Bulk Density, <2mm Fraction](/pages/9e6d23d2/)
- [iSDAsoil Clay Content](/pages/b359c603/)
- [iSDAsoil Effective Cation Exchange Capacity](/pages/c734392b/)
- [iSDAsoil Extractable Calcium](/pages/1e6a6374/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
