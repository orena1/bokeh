#-----------------------------------------------------------------------------
# Copyright (c) 2012 - 2023, Anaconda, Inc., and Bokeh Contributors.
# All rights reserved.
#
# The full license is in the file LICENSE.txt, distributed with this software.
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Boilerplate
#-----------------------------------------------------------------------------
from __future__ import annotations # isort:skip

import pytest ; pytest

#-----------------------------------------------------------------------------
# Imports
#-----------------------------------------------------------------------------

# Bokeh imports
from bokeh.core.property.vectorization import Expr, Field
from bokeh.models import (
    CategoricalColorMapper,
    CategoricalMarkerMapper,
    CategoricalPatternMapper,
    CumSum,
    Dodge,
    FactorRange,
    Jitter,
    LinearColorMapper,
    LogColorMapper,
    Stack,
)
from tests.support.util.api import verify_all

# Module under test
import bokeh.transform as bt # isort:skip

#-----------------------------------------------------------------------------
# Setup
#-----------------------------------------------------------------------------

ALL = (
    'cumsum',
    'dodge',
    'factor_cmap',
    'factor_hatch',
    'factor_mark',
    'jitter',
    'linear_cmap',
    'log_cmap',
    'stack',
    'transform',
)

#-----------------------------------------------------------------------------
# General API
#-----------------------------------------------------------------------------

Test___all__ = verify_all(bt, ALL)


class Test_cumsum:
    def test_basic(object) -> None:
        val = bt.cumsum("foo")
        assert isinstance(val, Expr)
        assert isinstance(val.expr, CumSum)
        assert val.expr.field == 'foo'
        assert val.expr.include_zero is False

    def test_include_zero(object) -> None:
        val = bt.cumsum("foo", include_zero=True)
        assert isinstance(val, Expr)
        assert isinstance(val.expr, CumSum)
        assert val.expr.field == 'foo'
        assert val.expr.include_zero is True


class Test_dodge:
    def test_basic(self) -> None:
        t = bt.dodge("foo", 0.5)
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, Dodge)
        assert t.transform.value == 0.5
        assert t.transform.range is None

    def test_with_range(self) -> None:
        r = FactorRange("a")
        t = bt.dodge("foo", 0.5, range=r)
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, Dodge)
        assert t.transform.value == 0.5
        assert t.transform.range is r
        assert t.transform.range.factors == ["a"]


class Test_factor_cmap:
    def test_basic(self) -> None:
        t = bt.factor_cmap("foo", ["red", "green"], ["foo", "bar"], start=1, end=2, nan_color="pink")
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, CategoricalColorMapper)
        assert t.transform.palette == ["red", "green"]
        assert t.transform.factors == ["foo", "bar"]
        assert t.transform.start == 1
        assert t.transform.end == 2
        assert t.transform.nan_color == "pink"

    def test_defaults(self) -> None:
        t = bt.factor_cmap("foo", ["red", "green"], ["foo", "bar"])
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, CategoricalColorMapper)
        assert t.transform.palette == ["red", "green"]
        assert t.transform.factors == ["foo", "bar"]
        assert t.transform.start == 0
        assert t.transform.end is None
        assert t.transform.nan_color == "gray"


class Test_factor_hatch:
    def test_basic(self) -> None:
        t = bt.factor_hatch("foo", ["+", "-"], ["foo", "bar"], start=1, end=2)
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, CategoricalPatternMapper)
        assert t.transform.patterns == ["+", "-"]
        assert t.transform.factors == ["foo", "bar"]
        assert t.transform.start == 1
        assert t.transform.end == 2

    def test_defaults(self) -> None:
        t = bt.factor_hatch("foo", ["+", "-"], ["foo", "bar"])
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, CategoricalPatternMapper)
        assert t.transform.patterns == ["+", "-"]
        assert t.transform.factors == ["foo", "bar"]
        assert t.transform.start == 0
        assert t.transform.end is None


class Test_factor_mark:
    def test_basic(self) -> None:
        t = bt.factor_mark("foo", ["hex", "square"], ["foo", "bar"], start=1, end=2)
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, CategoricalMarkerMapper)
        assert t.transform.markers == ["hex", "square"]
        assert t.transform.factors == ["foo", "bar"]
        assert t.transform.start == 1
        assert t.transform.end == 2

    def test_defaults(self) -> None:
        t = bt.factor_mark("foo", ["hex", "square"], ["foo", "bar"])
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, CategoricalMarkerMapper)
        assert t.transform.markers == ["hex", "square"]
        assert t.transform.factors == ["foo", "bar"]
        assert t.transform.start == 0
        assert t.transform.end is None


class Test_jitter:
    def test_basic(self) -> None:
        t = bt.jitter("foo", width=0.5, mean=0.1, distribution="normal")
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, Jitter)
        assert t.transform.width == 0.5
        assert t.transform.mean == 0.1
        assert t.transform.distribution == "normal"
        assert t.transform.range is None

    def test_defaults(self) -> None:
        t = bt.jitter("foo", width=0.5)
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, Jitter)
        assert t.transform.width == 0.5
        assert t.transform.mean == 0
        assert t.transform.distribution == "uniform"
        assert t.transform.range is None

    def test_with_range(self) -> None:
        r = FactorRange("a")
        t = bt.jitter("foo", width=0.5, mean=0.1, range=r)
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, Jitter)
        assert t.transform.width == 0.5
        assert t.transform.mean == 0.1
        assert t.transform.distribution == "uniform"
        assert t.transform.range is r
        assert t.transform.range.factors == ["a"]


class Test_linear_cmap:
    def test_basic(self) -> None:
        t = bt.linear_cmap("foo", ["red", "green"], 0, 10, low_color="orange", high_color="blue", nan_color="pink")
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, LinearColorMapper)
        assert t.transform.palette == ["red", "green"]
        assert t.transform.low == 0
        assert t.transform.high == 10
        assert t.transform.low_color == "orange"
        assert t.transform.high_color == "blue"
        assert t.transform.nan_color == "pink"

    def test_defaults(self) -> None:
        t = bt.linear_cmap("foo", ["red", "green"], 0, 10)
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, LinearColorMapper)
        assert t.transform.palette == ["red", "green"]
        assert t.transform.low == 0
        assert t.transform.high == 10
        assert t.transform.low_color is None
        assert t.transform.high_color is None
        assert t.transform.nan_color == "gray"


class Test_log_cmap:
    def test_basic(self) -> None:
        t = bt.log_cmap("foo", ["red", "green"], 0, 10, low_color="orange", high_color="blue", nan_color="pink")
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, LogColorMapper)
        assert t.transform.palette == ["red", "green"]
        assert t.transform.low == 0
        assert t.transform.high == 10
        assert t.transform.low_color == "orange"
        assert t.transform.high_color == "blue"
        assert t.transform.nan_color == "pink"

    def test_defaults(self) -> None:
        t = bt.log_cmap("foo", ["red", "green"], 0, 10)
        assert isinstance(t, Field)
        assert t.field == "foo"
        assert isinstance(t.transform, LogColorMapper)
        assert t.transform.palette == ["red", "green"]
        assert t.transform.low == 0
        assert t.transform.high == 10
        assert t.transform.low_color is None
        assert t.transform.high_color is None
        assert t.transform.nan_color == "gray"


class Test_stack:
    def test_basic(self) -> None:
        val = bt.stack("foo", "baz")
        assert isinstance(val, Expr)
        assert isinstance(val.expr, Stack)
        assert val.expr.fields == ('foo', 'baz')


class Test_transform:
    def test_basic(self) -> None:
        dodge = Dodge()
        t = bt.transform("foo", dodge)
        assert t == Field(field="foo", transform=dodge)

#-----------------------------------------------------------------------------
# Dev API
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Private API
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Code
#-----------------------------------------------------------------------------
